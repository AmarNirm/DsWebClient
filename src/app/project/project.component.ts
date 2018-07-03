import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { ICommunicationManager } from '../com/ICommunicationManager';
import { RestCommunicationManager } from '../com/RestCommunicationManager';
import { IAlgorithm } from '../model/IAlgorithm';
import { DummyAlgorithm } from '../model/DummyAlgorithm';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
 
  title = 'Data Science Explorer';
  algorithms: IAlgorithm[];
  selectedAlgorithm: IAlgorithm;

  private _comManager: ICommunicationManager

  constructor(
    private activeRoute: ActivatedRoute,
  ) 
  {
    this._comManager = new RestCommunicationManager();
    this.selectedAlgorithm = new DummyAlgorithm();
  }

  ngOnInit() 
  {
    this.title = this.activeRoute.snapshot.params.projectName;
    this.algorithms = this._comManager.getAlgorithms();
    console.log(this.algorithms);
  }
  
  onAlgorithmDrop(e: any) {
    console.log("onItemDrop");

    // Get the dropped data here
    this.selectedAlgorithm = e.dragData;
  }

  OnPlayClicked()
  {
    console.log("Play Clicked");
  }
}
