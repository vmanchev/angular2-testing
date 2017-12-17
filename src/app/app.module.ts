import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {JokeComponent} from './components/joke/joke.component';
import {AppRoutingModule} from './app-routing.module';
import {JokesService} from './providers/jokes/jokes.service';
import {SimpleComponent} from './components/simple/simple.component';
import {ChangemePipe} from './pipes/changeme/changeme.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    SimpleComponent,
    ChangemePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JokesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
