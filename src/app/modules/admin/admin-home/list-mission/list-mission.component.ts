import { Component, OnInit } from '@angular/core';
import { MissionService } from '../../services/mission.service';

@Component({
  selector: 'app-list-mission',
  templateUrl: './list-mission.component.html',
  styleUrls: ['./list-mission.component.css']
})
export class ListMissionComponent implements OnInit {

  missions;
  progress = true;

  constructor(private missionService : MissionService) { }

  ngOnInit() {
    this.getMission();
  }

  getMission(){
    this.missionService.getMissions().then(data =>{
      this.missions = data;
      this.progress = false;
    })
  }

}
