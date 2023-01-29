import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconDirective } from './directives/icon.directive';
import { DistanceConverterPipe } from './pipes/distance-converter.pipe';
import { TimeConverterPipe } from './pipes/time-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IconDirective,
    DistanceConverterPipe,
    TimeConverterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
