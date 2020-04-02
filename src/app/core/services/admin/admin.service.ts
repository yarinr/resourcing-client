import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  constructor() {}

  bigChart() {
    return [
      {
        name: "Programming",
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      },
      {
        name: "Devops",
        data: [106, 107, 111, 133, 221, 767, 1766]
      },
      {
        name: "Design",
        data: [163, 203, 276, 408, 547, 729, 628]
      },
      {
        name: "Angular",
        data: [18, 31, 54, 156, 339, 818, 1201]
      },
      {
        name: "TypeScript",
        data: [2, 2, 2, 6, 13, 30, 46]
      }
    ];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [
      {
        name: "Angular",
        y: 61.41,
        sliced: true,
        selected: true
      },
      {
        name: "React",
        y: 11.84
      },
      {
        name: "Phyton",
        y: 10.85
      },
      {
        name: "MongoDB",
        y: 4.67
      },
      {
        name: "Postgres",
        y: 4.18
      },
      {
        name: "JavaScript",
        y: 1.64
      },
      {
        name: "Redis",
        y: 1.6
      },
      {
        name: "TypeScript",
        y: 1.2
      },
      {
        name: "Other",
        y: 2.61
      }
    ];
  }
}
