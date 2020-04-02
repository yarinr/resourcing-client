import { Component, OnInit, Input } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-widget-area",
  templateUrl: "./area.component.html",
  styleUrls: ["./area.component.scss"]
})
export class AreaComponent implements OnInit {
  chartOptions: {};
  @Input() title: any = "";
  @Input() subtitle: any = "";
  @Input() valueSuffix: any = "";
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: "area"
      },
      title: {
        text: this.title
      },
      subtitle: {
        text: this.subtitle
      },
      tooltip: {
        split: true,
        valueSuffix: this.valueSuffix
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      series: this.data
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
}
