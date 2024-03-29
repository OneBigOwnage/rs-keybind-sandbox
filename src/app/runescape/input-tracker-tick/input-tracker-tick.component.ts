import { Component, Input, OnInit } from '@angular/core';
import { Interaction, MissedAction, ShouldPerformAction, SuccessfullyPerformedAction, Tick, UnexpectedKeyPress } from '../Interactions';
import { KeybindRepository } from '../keybind-repository.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import Game from '../Game.service';
import { map } from 'rxjs/operators';

export type InputTrackerTickContextType = 'PREVIOUS' | 'CURRENT' | 'UPCOMING';

@Component({
  selector: 'app-input-tracker-tick',
  templateUrl: './input-tracker-tick.component.html',
  styleUrls: ['./input-tracker-tick.component.scss']
})
export class InputTrackerTickComponent implements OnInit {

  @Input({ required: true })
  tick!: Tick;

  @Input({ required: true })
  context!: InputTrackerTickContextType;

  @Input()
  gcd: boolean = false;


  constructor(public game: Game, public repo: KeybindRepository) { }

  ngOnInit(): void {
  }

  public isSuccessful(interaction: Interaction): boolean {
    return interaction instanceof SuccessfullyPerformedAction;
  }

  public isUnexpected(interaction: Interaction): boolean {
    return interaction instanceof UnexpectedKeyPress;
  }

  public isMissed(interaction: Interaction): boolean {
    return interaction instanceof MissedAction;
  }

  public icon(interaction: Interaction): Observable<string | undefined> {
    if (!(interaction instanceof UnexpectedKeyPress)) {
      return of(interaction.keybind.ability.iconURL());
    }

    return of(undefined);
  }

  public shouldShowIcon(interaction: Interaction): Observable<boolean> {
    if (this.context === 'PREVIOUS') {
      return of(true);
    }

    return this.game.difficulty$().pipe(map(difficulty => {
      if (this.context === 'CURRENT') {
        return difficulty !== 'EXPERT' || !(interaction instanceof ShouldPerformAction);
      }

      return difficulty !== 'EXPERT'
    }));
  }

  public shouldShowKeybind(interaction: Interaction): Observable<boolean> {
    if (this.context === 'PREVIOUS') {
      return of(true);
    }

    return this.game.difficulty$().pipe(map(difficulty => {
      if (this.context === 'CURRENT') {
        return difficulty !== 'EXPERT' || !(interaction instanceof ShouldPerformAction);
      }

      return difficulty === 'BEGINNER';
    }));
  }
}
