import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { AdminService } from "src/app/core/services/admin/admin.service";
import { CategoryName } from "src/app/core/entities/category/model/category.model";

export interface RequestedTutorial {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  user: string;
}

export interface RequestedTopic {
  name: string;
  icon: string;
  category: CategoryName;
}

export interface RequestedTag {
  name: string;
}

const TUTORIAL_DATA: RequestedTutorial[] = [
  {
    id: "1",
    title: "ANGULAR tutorial",
    url: "angular.com",
    description: "angular course for beginners",
    tags: ["Angular", "Beginner", "Text"],
    user: "ofir_cohen"
  },
  {
    id: "2",
    title: "PHYTON tutorial",
    url: "python.com",
    description: "python course for beginners",
    tags: ["Phyton", "Beginner", "Text"],
    user: "ofir_cohen"
  }
];

const TOPIC_DATA: RequestedTopic[] = [
  { name: "Angular", icon: "angular.io", category: CategoryName.programming },
  { name: "React", icon: "react.io", category: CategoryName.programming },
  { name: "Linux", icon: "linux.io", category: CategoryName.devOps },
  { name: "Redis", icon: "redis.io", category: CategoryName.devOps },
  { name: "CSS", icon: "CSS.io", category: CategoryName.design }
];

const TAG_DATA: RequestedTag[] = [
  { name: "V2.0" },
  { name: "CSS" },
  { name: "Phyton" },
  { name: "Beginner" },
  { name: "Video" }
];

@Component({
  selector: "app-admin-page",
  templateUrl: "./admin-page.component.html",
  styleUrls: ["./admin-page.component.less"]
})
export class AdminPageComponent implements OnInit {
  areaWidgetOptions = {
    title: "Most viewed Topics & Categories",
    subtitle: "",
    valueSuffix: " tutorials viewed",
    data: []
  };

  pieWidgetOptions = {
    title: "Tutorials",
    data: []
  };

  tutorialDisplayedColumns: string[] = [
    "id",
    "title",
    "url",
    "description",
    "tags",
    "user",
    "actions"
  ];
  pendingTutorials = new MatTableDataSource<RequestedTutorial>(TUTORIAL_DATA);

  topicDisplayedColumns: string[] = ["name", "icon", "category", "actions"];
  pendingTopics = new MatTableDataSource<RequestedTopic>(TOPIC_DATA);

  tagDisplayedColumns: string[] = ["name", "actions"];
  pendingTags = new MatTableDataSource<RequestedTag>(TAG_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private adminDashboardService: AdminService) {}

  ngOnInit() {
    this.areaWidgetOptions.data = this.adminDashboardService.bigChart();
    this.pieWidgetOptions.data = this.adminDashboardService.pieChart();

    this.pendingTutorials.paginator = this.paginator;
  }
}
