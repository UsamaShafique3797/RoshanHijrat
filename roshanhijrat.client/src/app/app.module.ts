import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   
    AppComponent,       
    IndexComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
