import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pol',
  templateUrl: './pol.component.html',
  styleUrls: ['./pol.component.scss']
})
export class PolComponent implements OnInit {

  data = {
    datasets: [{
        data: [11,16,7,3,14],
        backgroundColor: [
            "#FF0000",
            "#66BB6A",
            "#FFA726",
            "#26C6DA",
            "#7E57C2"
        ],
        label: 'Dataset 1'
    },

    ],
    labels: [
        "Red",
        "Green",
        "Yellow",
        "Pink",
        "Blue"
    ]
};
chartOptions = {
  plugins: {
      legend: {
          labels: {
              color: '#495057'
          }
      }
  },
  scales: {
      r: {
          grid: {
              color: '#ebedef'
          }
      }
  }
}
constructor(){}
ngOnInit(): void {

}
}




