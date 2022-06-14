import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-grafica-principal',
  templateUrl: './grafica-principal.component.html',
  styleUrls: ['./grafica-principal.component.scss']
})
export class GraficaPrincipalComponent {

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
      //A partir de aqui pegar codigo
      let root = am5.Root.new("gradicaPrincipal");

// Set themes
root.setThemes([am5themes_Animated.new(root)]);

// Create chart
let grafPrin = root.container.children.push(
  am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "none",
    wheelY: "none",
    layout: root.verticalLayout
  })
);

// Datos de la grafica
let data = [
  {
    mes: "En",
    ahorro: 23.5 
  },
  {
    mes: "Febr",
    ahorro: 26.2

  },
  {
    mes: "Mzo",
    ahorro: 30.1
  },
  {
    mes: "Abr",
    ahorro: 29.5
  },
  {
    mes: "My",
    ahorro: 30.6
  },
  {
    mes: "Jun",
    ahorro: 34.1
  },
  {
    mes: "Jul",
    ahorro: 44.1
  },
  {
    mes: "Agt",
    ahorro: 14.1
  },
  {
    mes: "Sep",
    ahorro: -112.21
  },
  {
    mes: "Oct",
    ahorro: 100.1
  },
  {
    mes: "Nov",
    ahorro: 10
  },
  {
    mes: "Dic",
    ahorro: 12
  }
];

// Create axes
let xAxis = grafPrin.xAxes.push(
  am5xy.CategoryAxis.new(root, {
    categoryField: "mes",
    renderer: am5xy.AxisRendererX.new(root, {}),
    tooltip: am5.Tooltip.new(root, {})
  })
);

xAxis.data.setAll(data);

let yAxis = grafPrin.yAxes.push(
  am5xy.ValueAxis.new(root, {
    min: 0,
    extraMax: 0.1,
    renderer: am5xy.AxisRendererY.new(root, {})
  })
);


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

let series1 = grafPrin.series.push(
  am5xy.ColumnSeries.new(root, {
    name: "Ahorros",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "ahorro",
    categoryXField: "mes",
    tooltip:am5.Tooltip.new(root, {
      pointerOrientation:"horizontal",
      labelText:"{name} en {categoryX}: {valueY}€"
    })
  })
);

series1.columns.template.setAll({
  tooltipY: am5.percent(10),
  templateField: "columnSettings"
});

series1.data.setAll(data);


grafPrin.set("cursor", am5xy.XYCursor.new(root, {}));

// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
let legend = grafPrin.children.push(
  am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50,
    y: am5.p0,
    centerY: am5.p0
  })
);
legend.data.setAll(grafPrin.series.values);

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
grafPrin.appear(1000, 100);
series1.appear();
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}