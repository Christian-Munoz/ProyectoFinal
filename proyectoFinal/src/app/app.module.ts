import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { NgForm } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { MongoDbComponent } from './components/mongo-db/mongo-db.component';
import { JavaScriptComponent } from './components/java-script/java-script.component';
import { ExpressComponent } from './components/express/express.component';
import { NodeJsComponent } from './components/node-js/node-js.component';
import { AngularComponent } from './components/angular/angular.component';
import { PagosComponent } from './components/pagos/pagos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    ContactoComponent,
    HtmlComponent,
    CssComponent,
    FrontJuniorComponent,
    FrontSeniorComponent,
    FrontAdvanceComponent,
    FullStackComponent,
    FullStackVueComponent,
    FullStackAngularComponent,
    FullStackReactiveComponent,
    DesarrolloBackEndComponent,
    AppReactnativeComponent,
    BootstrapComponent,
    MongoDbComponent,
    JavaScriptComponent,
    ExpressComponent,
    NodeJsComponent,
    AngularComponent,
    PagosComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    CarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
