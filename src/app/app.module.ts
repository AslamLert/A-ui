import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomersComponent } from './components/customers/customers.component';
import { FormsModule } from '@angular/forms';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';

const appRoutes: Routes = [
  {path: '', component: CustomersComponent},
  {path: 'edit/:id', component:CustomerEditComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
