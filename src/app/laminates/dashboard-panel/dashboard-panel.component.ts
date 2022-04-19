import { Component, OnInit } from '@angular/core';
import { Panel } from './panel';
import { PanelService } from './services/panel.service';

@Component({
  selector: 'app-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.css']
})
export class DashboardPanelComponent implements OnInit {

  panel:Panel = new Panel();

  constructor(private panelService:PanelService) { }

  ngOnInit(): void {

    this.showInfoToDashboardPanel();
  }


  private showInfoToDashboardPanel(){

    this.panelService.getSummary().subscribe(
      data=>{
        this.panel = data;
      }
    )
  }




}
