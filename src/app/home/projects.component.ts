import { Component, OnInit } from '@angular/core';

import { ICommunicationManager } from "../com/ICommunicationManager";
import { RestCommunicationManager } from "../com/RestCommunicationManager";
import { IProject } from '../model/IProject';


@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit 
{

  private _comManager: ICommunicationManager;
  mostUsedProjects : IProject[];

  constructor() 
  {
    this._comManager = new RestCommunicationManager();
    this.InitilizeUi();
  }

  private InitilizeUi()
  {
      this.mostUsedProjects = this._comManager.getProjects();
      console.log(this.mostUsedProjects);
  }

  ngOnInit() 
  {
  }

}
