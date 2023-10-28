import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compontent/home/home.component';
import { ContactComponent } from './compontent/contact/contact.component';
import { LoginComponent } from './compontent/login/login.component';
import { ViewTaskComponent } from './compontent/Vice/view-task/view-task.component';
import { CreateTaskComponent } from './compontent/Vice/create-task/create-task.component';
import { ListManagerComponent } from './compontent/Vice/list-manager/list-manager.component';
import { ManagerTEmployeeDtlComponent } from './compontent/Vice/manager-temployee-dtl/manager-temployee-dtl.component';
import { ViceNavComponent } from './compontent/Vice/vice-nav/vice-nav.component';
import { VietaskComponent } from './compontent/employee/vietask/vietask.component';
import { canActiveUserAuthGuard } from './authGuardServices/can-active-user-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'vice',
    component: ViceNavComponent,
    canActivate:[canActiveUserAuthGuard],data:{roles:['VICE']},
    children: [
      { path: '', component: ViewTaskComponent },
      { path: 'viewtask', component: ViewTaskComponent },
      { path: 'createtask', component: CreateTaskComponent },
      { path: 'lomanangers', component: ListManagerComponent },
    ],
  },
  { path: 'manager', component: ManagerTEmployeeDtlComponent },
  { path: 'employee', component: VietaskComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
