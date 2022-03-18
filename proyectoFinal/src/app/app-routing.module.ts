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



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  //{ path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  //{ path: '', redirectTo: '/home', pathMatch: 'full'},



  { path: 'home', component: HomeComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'html', component: HtmlComponent},
  { path: 'css', component: CssComponent},
  { path: 'front-junior', component: FrontJuniorComponent},
  { path: 'front-senior', component: FrontSeniorComponent},
  { path: 'front-advance', component: FrontAdvanceComponent},
  { path: 'full-stack' , component: FullStackComponent},
  { path: 'full-stack-vue', component: FullStackVueComponent},
  { path: 'full-stack-angular', component: FullStackAngularComponent},
  { path: 'full-stack-reactive', component: FullStackReactiveComponent},
  { path: 'desarrollo-back-end', component: DesarrolloBackEndComponent},
  { path: 'app-reactnative', component: AppReactnativeComponent},
  { path: 'Desarrollo-BackEnd', component: DesarrolloBackEndComponent},
  { path: 'app-reackNative' , component: AppReactnativeComponent},
  { path: 'angular', component: AngularComponent},
  { path: 'bootstrap', component: BootstrapComponent},
  { path: 'express', component: ExpressComponent},
  { path: 'java-script', component: JavaScriptComponent},
  { path: 'mongo-db', component: MongoDbComponent},
  { path: 'node-js', component: NodeJsComponent},
  { path: 'pagos', component: PagosComponent}


  // { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
