import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Science Application';
  
  /* 
    When the user clicks on the button, 
    toggle between hiding and showing the dropdown content
  */
  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

}
