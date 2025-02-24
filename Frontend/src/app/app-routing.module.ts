import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEmpComponent } from './addemp/addemp.component';
import { DeleteempComponent } from './deleteemp/deleteemp.component';
import { ListempComponent } from './listemp/listemp.component';
import { UpdateEmpComponent } from './updateemp/updateemp.component';
import { SearchempComponent } from './searchemp/searchemp.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'addemp', component: AddEmpComponent },
  { path: 'updateemp', component: UpdateEmpComponent },
  { path: 'listemp', component: ListempComponent },
  { path: 'deleteemp', component: DeleteempComponent },
  {path:'searchemp',component:SearchempComponent},
  {path:'pagination',component:PaginationComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
