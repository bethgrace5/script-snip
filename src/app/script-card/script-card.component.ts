import { Component, OnInit, Input } from '@angular/core';
import { Script } from '../models/script';

@Component({
  selector: 'app-script-card',
  templateUrl: './script-card.component.html',
  styleUrls: ['./script-card.component.css']
})
export class ScriptCardComponent implements OnInit {
  @Input() script: Script;

  textToCopy: string;
  scriptAndFlag: string;

  constructor() { }

  ngOnInit() {
    console.log("init")
    this.scriptAndFlag = this.script.command + " " + this.script.flags.join(" ")
  }

}
