import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compontent/header/header.component';
import { HomeComponent } from './compontent/home/home.component';
import { ContactComponent } from './compontent/contact/contact.component';
import { LoginComponent } from './compontent/login/login.component';
import { ListManagerComponent } from './compontent/Vice/list-manager/list-manager.component';
import { ManagerTEmployeeDtlComponent } from './compontent/Vice/manager-temployee-dtl/manager-temployee-dtl.component';
import { CreateTaskComponent } from './compontent/Vice/create-task/create-task.component';
import { ViewTaskComponent } from './compontent/Vice/view-task/view-task.component';
import { ManagerDetailsComponent } from './compontent/Manager/manager-details/manager-details.component';
import { TaskAndAssignComponent } from './compontent/Manager/task-and-assign/task-and-assign.component';
import { VietaskComponent } from './compontent/employee/vietask/vietask.component';
import { ViceNavComponent } from './compontent/Vice/vice-nav/vice-nav.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UserAuthInterceptor } from './Interceptor/user-auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    ListManagerComponent,
    ManagerTEmployeeDtlComponent,
    CreateTaskComponent,
    ViewTaskComponent,
    ManagerDetailsComponent,
    TaskAndAssignComponent,
    VietaskComponent,
    ViceNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
  ],
  providers: [DatePipe,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : UserAuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
