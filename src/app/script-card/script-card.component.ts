import { Component, OnInit, Input } from '@angular/core';
import { Script } from '../models/script';

@Component({
  selector: 'app-script-card',
  templateUrl: './script-card.component.html',
  styleUrls: ['./script-card.component.css']
})
export class ScriptCardComponent implements OnInit {
  @Input() script: Script;

  constructor() { }

  ngOnInit() {
  }

  public copyToClipboard() {
    console.log('I want this script in my clipboard: \"', this.script.command, '\"');
    console.log('but, it needs all of the flags also, something like: [script flag flag flag]');

    let stringInterpolation: string = 'String Interpolation';
    console.log(`I suggest using ${stringInterpolation}`);
  }

}
