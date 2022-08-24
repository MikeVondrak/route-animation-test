import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InsideComponent } from './inside/inside.component';
import { MenuComponent } from './menu/menu.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    HomeComponent,
    InsideComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule,
  ]
})
export class PagesModule { }
