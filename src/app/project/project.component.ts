import { switchMap } from 'rxjs/operators';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  title = 'Data Science Explorer';
  selectedData = 'Select Data';
  Data1Name = "Data 1"; // todo: get dynamically from web server
  Data2Name = "Data 2"; // todo: get dynamically from web server

  selectedAlgorithm = 'Select Algorithm';
  algo1Name = "Algorithm 1"; // todo: get dynamically from web server
  algo2Name = "Algorithm 2"; // todo: get dynamically from web server

  constructor(
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() 
  {
    this.title = this.activeRoute.snapshot.params.projectName;
  }
  
  

  // When the user clicks on the button, toggle between hiding and showing the dropdown content
  OnDropdownClicked(dropdownList) {
    document.getElementById(dropdownList).classList.toggle("show");
  }

  OnListItemSelected (dropdownList, button) {
    if( dropdownList== "DataDropdownList")
      this.selectedData = button;
    else
      this.selectedAlgorithm = button;
    document.getElementById(dropdownList).classList.toggle("show");
  }

  OnPlayClicked()
  {
    console.log("Play Clicked");
  }
}
