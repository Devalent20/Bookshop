import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home - Library' },
  { path: 'catalog', component: CatalogComponent, title: 'Catalog - Library' },
  { path: 'login', component: LoginComponent, title: 'Login - Library' },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register - Library',
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
