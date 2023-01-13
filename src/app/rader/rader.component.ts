import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rader',
  templateUrl: './rader.component.html',
  styleUrls: ['./rader.component.scss']
})
export class RaderComponent implements OnInit {


  data = {
    labels: ['Nagaraj', 'Datta', 'Narayana',
             'pusa', 'Kartik', 'Aman', 'Pooja'],
    datasets: [
        {
            label: 'First Dataset',
            data: [75, 49, 95, 71, 66, 65, 45],
            backgroundColor: 'green',
            borderColor: 'green',
            pointHoverBorderColor: 'green',

        },
        {
            label: 'Second dataset',
            data: [85, 99, 75, 41, 86, 56, 55],
            backgroundColor: 'yellow',
            borderColor: 'yellow',
            pointHoverBorderColor: 'yellow',
        }
    ]
};

  constructor(){}


  ngOnInit(): void {

  }

}
