import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


import { ICommunicationManager } from '../com/ICommunicationManager';
import { RestCommunicationManager } from '../com/RestCommunicationManager';
import { IAlgorithm } from '../model/Algorithm/IAlgorithm';
import { DummyAlgorithm } from '../model/Algorithm/DummyAlgorithm';
import { Algorithm } from '../model/Algorithm/Algorithm';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  title = 'Data Science Explorer';
  algorithms: IAlgorithm[];

  constructor(
    private activeRoute: ActivatedRoute,
    private _comManager: RestCommunicationManager
  ) {
    this.algorithms = new Array<DummyAlgorithm>();
  }

  ngOnInit() {
    this.title = this.activeRoute.snapshot.params.projectName;

    this._comManager.getAlgorithms().subscribe(
      (algorithms) => {
        this.algorithms = algorithms;
      });
    console.log(this.algorithms);
  }

  OnPlayClicked() {
    console.log('Play Clicked');
  }
}
