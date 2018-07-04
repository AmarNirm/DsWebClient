import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgDragDropModule } from 'ng-drag-drop';


import { AppComponent } from './app.component';
import { ProjectsComponent } from './home/projects.component';
import { ProjectComponent } from './project/project.component';
import { ProjectGraphComponent } from './project/project-graph/project-graph.component';
import { ConvertToTextPipe } from './project/project-graph/AlgorithmOutputToText.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectComponent,
    ProjectGraphComponent,
    ConvertToTextPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'projects', component: ProjectsComponent },
      { path: 'project/:projectName', component: ProjectComponent },
      { path: '', redirectTo: 'projects', pathMatch: 'full'},
      { path: '**', redirectTo: 'projects', pathMatch: 'full'}
    ]),
    NgDragDropModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
