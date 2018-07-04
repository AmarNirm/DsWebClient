import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { ICommunicationManager } from '../com/ICommunicationManager';
import { RestCommunicationManager } from '../com/RestCommunicationManager';
import { IAlgorithm } from '../model/Algorithm/IAlgorithm';
import { DummyAlgorithm } from '../model/Algorithm/DummyAlgorithm';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
 
  title = 'Data Science Explorer';
  algorithms: IAlgorithm[];

  private _comManager: ICommunicationManager

  constructor(
    private activeRoute: ActivatedRoute,
  ) 
  {
    this._comManager = new RestCommunicationManager();
  }

  ngOnInit() 
  {
    this.title = this.activeRoute.snapshot.params.projectName;
    this.algorithms = this._comManager.getAlgorithms();
    console.log(this.algorithms);
  }

  OnPlayClicked()
  {
    console.log("Play Clicked");
  }
}
