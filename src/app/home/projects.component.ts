import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() 
  {
    console.log("ProjectsComponent");
  }

  ngOnInit() 
  {
    console.log("ProjectsComponent");
  }

}
