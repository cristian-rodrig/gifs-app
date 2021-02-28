import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GifsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
