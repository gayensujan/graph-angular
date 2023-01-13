import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit{

  data = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
        {
            data: [300, 50, 100, 60],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726",
                'red'
            ],
            hoverBackgroundColor: [
                "#64B5F6",
                "#81C784",
                "#FFB74D",
                'pink'
            ]

        }
    ]
};
chartOptions = {
  plugins: {
      legend: {
          labels: {
              color: '#495057'
          }
      }
  }
}



  constructor(){}

  ngOnInit(): void {

  }

}
