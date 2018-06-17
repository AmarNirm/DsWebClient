import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectsComponent} from './home/projects.component'; 


const appRoutes : Routes =
  [
    {
      path: '',
      component: ProjectsComponent
    },
    {
      path: 'projects',
      component: ProjectsComponent
    },
    {
      path: '**',
      component: ProjectsComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);