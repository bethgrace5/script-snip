import { Component, OnInit } from '@angular/core';
import { Script } from '../models/script';

@Component({
  selector: 'app-scripts-screen',
  templateUrl: './scripts-screen.component.html',
  styleUrls: ['./scripts-screen.component.css']
})
export class ScriptsScreenComponent implements OnInit {

  public script1: Script
  public script2: Script
  public script3: Script

  constructor() { }

  ngOnInit() {

    this.script1 = {
      command: "script 1 command here",
      flags: [
        "-f1",
        "-f5",
        "-f4",
        "-f3",
        "--other-flag"
      ]
    }
    this.script2 = {
      command: "two",
      flags: [
        "-f3",
        "--other-flag"
      ]
    }
    this.script3 = {
      command: "three",
      flags: [
        "-f3",
        "--other-flag"
      ]
    }

  }

}
