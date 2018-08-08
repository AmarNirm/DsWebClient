import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgDragDropModule } from 'ng-drag-drop';

import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './home/projects.component';
import { ProjectComponent } from './project/project.component';
import { ProjectGraphComponent } from './project/project-graph/project-graph.component';
import { ConvertToTextPipe } from './project/project-graph/AlgorithmOutputToText.pipe';
import { RestCommunicationManager } from './com/RestCommunicationManager';



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
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Charts,

    RouterModule.forRoot([
      { path: 'projects', component: ProjectsComponent },
      { path: 'project/:projectName', component: ProjectComponent },
      { path: '', redirectTo: 'projects', pathMatch: 'full'},
      { path: '**', redirectTo: 'projects', pathMatch: 'full'}
    ]),
    NgDragDropModule.forRoot(),
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
    RestCommunicationManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
