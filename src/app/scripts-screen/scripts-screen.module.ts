import { ScriptsScreenComponent } from './scripts-screen.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptCardModule } from '../script-card/script-card.module';

@NgModule({
  imports: [
    CommonModule,
    ScriptCardModule,
  ],
  declarations: [ScriptsScreenComponent]
})
export class ScriptsScreenModule { }
