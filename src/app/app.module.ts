import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatternLibModule } from '@venkateshpallanti/my-story-book-infinite-7270';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,PatternLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
