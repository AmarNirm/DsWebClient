import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  private output: IAlgorithmOutput;

  private outputTableHeaders: string[];
  private outputTableData: number[][];

  // lineChart
  public lineChartLabels: Array<any>; // = [
  //     'January',
  //     'February',
  //     'March',
  //     'April',
  //     'May',
  //     'June',
  //     'July'
  // ];

  public lineChartData: Array<any>; // = [
      // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
      // { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  // ];
  public lineChartOptions: any = {
      responsive: true
  };
  public lineChartColors: Array<any> = [
    {
        // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
        // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
        // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  // tslint:disable-next-line:no-inferrable-types
  public lineChartLegend: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  public lineChartType: string = 'line';


  constructor(
    private comManager: RestCommunicationManager
  ) {
    this.selectedAlgorithm = new DummyAlgorithm();
  }

  ngOnInit() {
    this.outputTableHeaders  = new Array<string>();
    this.outputTableData = new Array<Array<number>>();

    this.lineChartLabels = new Array<any>();
    this.lineChartData = new Array<any>();
  }

  onAlgorithmDrop(e: any) {
    // Get the dropped data here
    this.selectedAlgorithm = e.dragData;
    this.output = this.comManager.activateAlgorithm(this.selectedAlgorithm);
    this.outputTableHeaders = new Array<string>();
    this.outputTableData = new Array<Array<number>>();
    this.lineChartLabels = new Array<any>();
    this.lineChartData = new Array<any>();

    // Table convention - the first array is headers and the rest are body
    if (this.selectedAlgorithm.OutputType === AlgorithmOutputType.Table) {
      this.outputTableHeaders = this.output.Output[0];
      for (let index = 1; index < this.output.Output.length; index++) {
        const element = this.output.Output[index];
        this.outputTableData[index - 1] = element;
      }
    } else if (this.selectedAlgorithm.OutputType === AlgorithmOutputType.Graph) {
      // Graph convention - the first array is the graph lables and the rest are series (body) - can be plural
      this.lineChartLabels = this.output.Output[0];
      for (let index = 1, dataIndex = 0; index < this.output.Output.length - 1; index += 2, dataIndex++) {
        const label = this.output.Output[index];
        const data = this.output.Output[index + 1];
        this.lineChartData[dataIndex] = { data: data, label: label[0] };
      }
    }
  }

  IsAlgorithmOutputText (): boolean {
    return this.selectedAlgorithm.OutputType === AlgorithmOutputType.Text;
  }

  IsAlgorithmOutputTable (): boolean {
    return this.selectedAlgorithm.OutputType === AlgorithmOutputType.Table &&
      this.outputTableHeaders !== null &&
      this.outputTableHeaders.length > 0;
  }

  IsAlgorithmOutputGraph (): boolean {
    return this.selectedAlgorithm.OutputType === AlgorithmOutputType.Graph &&
    this.lineChartLabels !== null && this.lineChartData !== null;
  }


  // // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
