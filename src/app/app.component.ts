import { Component } from '@angular/core';

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

  // OnFilterPressed() {
  //     var input, filter, ul, li, a, i;
  //     input = document.getElementById("AlgorithmDropdownInput");
  //     filter = input.value.toUpperCase();
  //     var div = document.getElementById("AlgorithmDropdownList");
  //     a = div.getElementsByTagName("button");
  //     for (i = 0; i < a.length; i++) {
  //         if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
  //             a[i].style.display = "";
  //         } else {
  //             a[i].style.display = "none";
  //         }
  //     }
  // }
}
