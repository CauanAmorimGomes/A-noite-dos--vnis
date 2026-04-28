// ============================================================
// ANGULAR — app.module.ts
// Operação Noite Oficial 1986
// ============================================================

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RadarComponent } from './radar/radar.component';
import { HypothesesComponent } from './hypotheses/hypotheses.component';
import { WitnessesComponent } from './witnesses/witnesses.component';
import { OvniService } from './ovni.service';

@NgModule({
  declarations: [
    AppComponent,
    RadarComponent,
    HypothesesComponent,
    WitnessesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [OvniService],
  bootstrap: [AppComponent],
})
export class AppModule {}
