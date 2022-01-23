import { Component, OnInit } from '@angular/core';
import GameLoop from './runescape/GameLoop';
import RotationRepository from './runescape/RotationRepository';
import { Tick } from './runescape/Tick';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showRotationBuilder: boolean = false;

  constructor(public game: GameLoop, public repo: RotationRepository) { }

  ngOnInit() {
    this.loadRotation();
  }

  start() {
    this.game.start();
  }

  stop() {
    this.game.stop();
  }

  loadRotation() {
    this.repo.rotation.next([
      new Tick(Date.now(), ['A'], []),
      new Tick(Date.now(), ['B', 'B'], []),
      new Tick(Date.now(), ['C'], []),
    ]);
  }
}
