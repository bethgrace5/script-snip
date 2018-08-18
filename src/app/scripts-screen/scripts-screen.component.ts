import { Component, OnInit } from '@angular/core';
import { Script } from '../models/script';

@Component({
  selector: 'app-scripts-screen',
  templateUrl: './scripts-screen.component.html',
  styleUrls: ['./scripts-screen.component.css']
})
export class ScriptsScreenComponent implements OnInit {

  public script1: Script

  constructor() { }

  ngOnInit() {
    this.script1 = {
      command: "script 1 command",
      flags: [
        "-f1",
        "-f2",
        "--other-flag"
      ]
    }
  }

}
