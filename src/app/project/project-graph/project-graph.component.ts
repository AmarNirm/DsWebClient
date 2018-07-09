import { Component, OnInit } from '@angular/core';


import { IAlgorithm } from '../../model/Algorithm/IAlgorithm';
import { DummyAlgorithm } from '../../model/Algorithm/DummyAlgorithm';
import { ICommunicationManager } from '../../com/ICommunicationManager';
import { RestCommunicationManager } from '../../com/RestCommunicationManager';
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
  
  private outputTableHeaders : string[];
  private outputTableData : number[][];

  constructor()
  {
    this.comManager = new RestCommunicationManager();
    this.selectedAlgorithm = new DummyAlgorithm();
    
    this.outputTableHeaders  = new Array<string>();
    this.outputTableData = new Array<Array<number>>();
  }

  ngOnInit() {}

  onAlgorithmDrop(e: any) 
  {
    // Get the dropped data here
    this.selectedAlgorithm = e.dragData;
    this.output = this.comManager.activateAlgorithm(this.selectedAlgorithm);
    this.outputTableHeaders = new Array<string>();
    this.outputTableData = new Array<Array<number>>();
    
    // Table convention - the first array is headers and the rest are body
    if(this.selectedAlgorithm.OutputType == AlgorithmOutputType.Table)
    {
      this.outputTableHeaders = this.output.Output[0];
      for (let index = 1; index < this.output.Output.length; index++) {
        const element = this.output.Output[index];
        this.outputTableData[index - 1] = element;
      }
    }

    // Graph
    else if(this.selectedAlgorithm.OutputType == AlgorithmOutputType.Graph)
    {
    }
  }

  IsAlgorithmOutputText () : boolean 
  {
    return this.selectedAlgorithm.OutputType == AlgorithmOutputType.Text;
  }
  IsAlgorithmOutputTable () : boolean 
  {
    return this.selectedAlgorithm.OutputType == AlgorithmOutputType.Table;
  }
  IsAlgorithmOutputGraph () : boolean 
  {
    return this.selectedAlgorithm.OutputType == AlgorithmOutputType.Graph;
  }

}
