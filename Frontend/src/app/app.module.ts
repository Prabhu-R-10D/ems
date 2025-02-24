import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEmpComponent } from './addemp/addemp.component';
import { DeleteempComponent } from './deleteemp/deleteemp.component';
import { ListempComponent } from './listemp/listemp.component';
import { UpdateEmpComponent } from './updateemp/updateemp.component';
import { SearchempComponent } from './searchemp/searchemp.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    AddEmpComponent,
    DeleteempComponent,
    ListempComponent,
    UpdateEmpComponent,
    SearchempComponent,
    PaginationComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
