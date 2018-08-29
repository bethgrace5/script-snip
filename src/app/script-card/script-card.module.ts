import { ScriptCardComponent } from './script-card.component';

import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  imports: [
    ClipboardModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [ScriptCardComponent],
  exports: [ScriptCardComponent]
})
export class ScriptCardModule { }
