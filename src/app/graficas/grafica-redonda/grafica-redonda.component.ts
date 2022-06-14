import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-grafica-redonda',
  templateUrl: './grafica-redonda.component.html',
  styleUrls: ['./grafica-redonda.component.scss']
})
export class GraficaRedondaComponent {

  private root: am5.Root;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new("grafricaRedonda");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
let chart = root.container.children.push(
  am5percent.PieChart.new(root, {
    startAngle: 160, endAngle: 380
  })
);

// Create series
let series1 = chart.series.push(
  am5percent.PieSeries.new(root, {
    startAngle: 160,
    endAngle: 380,
    valueField: "porcentaje",
    innerRadius: am5.percent(80),
    categoryField: "titulo"
  })
);

series1.ticks.template.set("forceHidden", true);
series1.labels.template.set("forceHidden", true);

let label = chart.seriesContainer.children.push(
  am5.Label.new(root, {
    textAlign: "center",
    centerY: am5.p100,
    centerX: am5.p50,
    text: "[fontSize:18px]total[/]:\n[bold fontSize:30px]600[/]"
  })
);

let data = [
  {
    titulo: "Gastos",
    porcentaje: 200
  },
  {
    titulo: "Ahorros",
    porcentaje: 400
  }
];

// Set data
series1.data.setAll(data);
    });
  }
}