import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ ScriptjsService} from "./scriptjs.service";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClientsComponent } from './clients/clients.component';
import { NuestrosproductosComponent } from './nuestrosproductos/nuestrosproductos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ProductoselectricosComponent } from './productoselectricos/productoselectricos.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    ClientsComponent,
    NuestrosproductosComponent,
    NavbarComponent,
    ContactComponent,
    ProductoselectricosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [ 
    ScriptjsService
  ],

  bootstrap: [
    AppComponent
  ],

})
export class AppModule { }
