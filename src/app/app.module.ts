import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalCooldownComponent } from './global-cooldown/global-cooldown.component';
import { DelayComponent } from './delay/delay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RunescapeModule } from './runescape/runescape.module';

@NgModule({
  declarations: [
    AppComponent,
    GlobalCooldownComponent,
    DelayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    RunescapeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
