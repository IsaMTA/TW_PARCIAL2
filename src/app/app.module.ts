import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DudasComponent } from './dudas/dudas.component';
import { RedesComponent } from './redes/redes.component';
import { PieComponent } from './pie/pie.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    HomeComponent,
    MenuComponent,
    DudasComponent,
    RedesComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
