import { Component } from '@angular/core';
import { RestCommunicationManager } from "./com/RestCommunicationManager";
import { ICommunicationManager } from "./com/ICommunicationManager";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Science Explorer';
  selectedData = 'Select Data';
  Data1Name = "Data 1"; // todo: get dynamically from web server
  Data2Name = "Data 2"; // todo: get dynamically from web server

  selectedAlgorithm = 'Select Algorithm';
  algo1Name = "Algorithm 1"; // todo: get dynamically from web server
  algo2Name = "Algorithm 2"; // todo: get dynamically from web server

  private _comManager: ICommunicationManager;

  constructor()
  {
      this._comManager = new RestCommunicationManager();
      this.InitilizeUi();
  }

  private InitilizeUi()
  {
      let projects = this._comManager.getProjects();
      console.log(projects);
  }

  // When the user clicks on the button, toggle between hiding and showing the dropdown content
  OnDropdownClicked(dropdownList) {
    console.log(dropdownList);
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
