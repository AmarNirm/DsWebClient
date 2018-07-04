import { Component, OnInit } from '@angular/core';


import { IAlgorithm } from '../../model/Algorithm/IAlgorithm';
import { DummyAlgorithm } from '../../model/Algorithm/DummyAlgorithm';
import { ICommunicationManager } from '../../com/ICommunicationManager';
import { RestCommunicationManager } from '../../com/RestCommunicationManager';
import { OutputType } from '@angular/core/src/view';
import { AlgorithmOutputType } from '../../model/AlgorithmOutputType';
import { IAlgorithmOutput } from '../../model/Algorithm/IAlgorithmOutput';

@Component({
  selector: 'app-project-graph',
  templateUrl: './project-graph.component.html',
  styleUrls: ['./project-graph.component.css']
})
export class ProjectGraphComponent implements OnInit {

  private selectedAlgorithm: IAlgorithm;
  private comManager: ICommunicationManager;
  private output: IAlgorithmOutput;
   

  constructor()
  {
    this.selectedAlgorithm = new DummyAlgorithm();
    this.comManager = new RestCommunicationManager();
  }

  ngOnInit() {}

  onAlgorithmDrop(e: any) 
  {
    // Get the dropped data here
    this.selectedAlgorithm = e.dragData;
    this.output = this.comManager.activateAlgorithm(this.selectedAlgorithm);
  }

  IsAlgorithmOutputText () : boolean 
  {
    return this.selectedAlgorithm.OutputType == AlgorithmOutputType.Text;
  }

}
