import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-barra-inversion3',
  templateUrl: './barra-inversion3.component.html',
  styleUrls: ['./barra-inversion3.component.scss']
})
export class BarraInversion3Component {

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
      let root = am5.Root.new("barra-inversion3");


      // Set themes
      root.setThemes([
        am5themes_Animated.new(root)
      ]);
      
      
      // Create chart
      let chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        layout: root.verticalLayout
      }));
      
    
      
      let data = [{
        "inversion": "Moto",
        "restante": 1125,
        "ahorrado": 540
      }]
      
      
      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "inversion",
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {})
      }));
      
      xAxis.data.setAll(data);
      
      let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        min: 0,
        max: 100,
        numberFormat: "#'%'",
        strictMinMax: true,
        calculateTotals: true,
        renderer: am5xy.AxisRendererY.new(root, {})
      }));
      
      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      function makeSeries(name, fieldName) {
        let series = chart.series.push(am5xy.ColumnSeries.new(root, {
          name: name,
          stacked: true,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          valueYShow: "valueYTotalPercent",
          categoryXField: "inversion"
        }));
      
        series.columns.template.setAll({
          tooltipText: "{name}: {valueY.formatNumber('#.#')} €",
          tooltipY: am5.percent(10)
        });
        series.data.setAll(data);
      
        // Make stuff animate on load
        series.appear();
      
        series.bullets.push(function () {
          return am5.Bullet.new(root, {
            sprite: am5.Label.new(root, {
              text: "{valueYTotalPercent.formatNumber('#.#')}%",
              fill: root.interfaceColors.get("alternativeText"),
              centerY: am5.p50,
              centerX: am5.p50,
              populateText: true
            })
          });
        });
      }
      
      makeSeries("Restante", "restante");
      makeSeries("Ahorrado", "ahorrado");
      
      // Make stuff animate on load
      chart.appear(1000, 100);
    });
  }
}
