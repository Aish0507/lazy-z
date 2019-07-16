import { Component, OnInit } from '@angular/core';
import {DashboardModel} from "../../models/dashboard.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dummyData: any
  constructor() {
  }

    async ngOnInit() {
    this.dummyData = await DashboardModel.getDummyData();

  }

}
