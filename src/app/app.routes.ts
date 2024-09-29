import { Routes } from '@angular/router';
import { LoginComponent } from './basemodule/login/login.component';
import { RegisterComponent } from './basemodule/register/register.component';
import { HomeComponent } from './basemodule/home/home.component';
import { OrderComponent } from './businessLogic/order/order.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "order", component: OrderComponent}
];
