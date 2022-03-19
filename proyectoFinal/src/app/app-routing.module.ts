import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HtmlComponent } from './components/html/html.component';
import { CssComponent } from './components/css/css.component';
import { FrontJuniorComponent } from './components/front-junior/front-junior.component';
import { FrontSeniorComponent } from './components/front-senior/front-senior.component';
import { FrontAdvanceComponent } from './components/front-advance/front-advance.component';
import { FullStackComponent } from './components/full-stack/full-stack.component';
import { FullStackVueComponent } from './components/full-stack-vue/full-stack-vue.component';
import { FullStackAngularComponent } from './components/full-stack-angular/full-stack-angular.component';
import { FullStackReactiveComponent } from './components/full-stack-reactive/full-stack-reactive.component';
import { DesarrolloBackEndComponent } from './components/desarrollo-back-end/desarrollo-back-end.component';
import { AppReactnativeComponent } from './components/app-reactnative/app-reactnative.component';
import { AngularComponent } from './components/angular/angular.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { MongoDbComponent } from './components/mongo-db/mongo-db.component';
import { JavaScriptComponent } from './components/java-script/java-script.component';
import { ExpressComponent } from './components/express/express.component';
import { NodeJsComponent } from './components/node-js/node-js.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { UserGuard } from './user.guard';



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  //{ path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  //{ path: '', redirectTo: '/home', pathMatch: 'full'},



  { path: 'home', component: HomeComponent, canActivate: [UserGuard]},
  { path: 'contacto', component: ContactoComponent, canActivate: [UserGuard]},
  { path: 'html', component: HtmlComponent, canActivate: [UserGuard]},
  { path: 'css', component: CssComponent, canActivate: [UserGuard]},
  { path: 'front-junior', component: FrontJuniorComponent, canActivate: [UserGuard]},
  { path: 'front-senior', component: FrontSeniorComponent, canActivate: [UserGuard]},
  { path: 'front-advance', component: FrontAdvanceComponent, canActivate: [UserGuard]},
  { path: 'full-stack' , component: FullStackComponent, canActivate: [UserGuard]},
  { path: 'full-stack-vue', component: FullStackVueComponent, canActivate: [UserGuard]},
  { path: 'full-stack-angular', component: FullStackAngularComponent, canActivate: [UserGuard]},
  { path: 'full-stack-reactive', component: FullStackReactiveComponent, canActivate: [UserGuard]},
  { path: 'desarrollo-back-end', component: DesarrolloBackEndComponent, canActivate: [UserGuard]},
  { path: 'app-reactnative', component: AppReactnativeComponent, canActivate: [UserGuard]},
  { path: 'Desarrollo-BackEnd', component: DesarrolloBackEndComponent, canActivate: [UserGuard]},
  { path: 'app-reackNative' , component: AppReactnativeComponent, canActivate: [UserGuard]},
  { path: 'angular', component: AngularComponent, canActivate: [UserGuard]},
  { path: 'bootstrap', component: BootstrapComponent, canActivate: [UserGuard]},
  { path: 'express', component: ExpressComponent, canActivate: [UserGuard]},
  { path: 'java-script', component: JavaScriptComponent, canActivate: [UserGuard]},
  { path: 'mongo-db', component: MongoDbComponent, canActivate: [UserGuard]},
  { path: 'node-js', component: NodeJsComponent, canActivate: [UserGuard]},
  { path: 'pagos', component: PagosComponent, canActivate: [UserGuard]},


  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
