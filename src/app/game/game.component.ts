import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Card } from '../shared/card.model';
import { MatDialog } from '@angular/material';
import { GameService } from '../game.service';
import { Accomplishment } from '../shared/accomplishment.model';
// import { PlayerDialogComponent } from '../dialogs/player-dialog/player-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  animations: [
    trigger('in', [
      transition('void => *', [
        style({
          transform: 'rotate(360deg) scale(0)'
        }),
        animate(1000, style({
          transform: 'rotate(0) scale(1)'
        }))
      ])
    ])
  ]
})
export class GameComponent {


  constructor(private gameService: GameService ,private router: Router ,
    private dialog: MatDialog  ) { }
  //boardSize = '4'; // stored as string to set a default value to Select input (if as a number it won't work).
  //cards: Card[][] = [];
  showLoading = false;
  isGameRunning = false;
  isGameOver = false;
  clickedCard: Card; // this is the first card was clicked, after well compared with the second card.
  clicks = 0; // count the clicks. (maximum 2)
  delayTimer;

  players: Accomplishment [] = [];
  startedTime: number; // this will hold the started time as milliseconds.

  countInterval: any;
  seconds = 0;
  minutes = 0;

  ngOnInit(): void { // getting the accomplishments from the server (firebase) if there is.
    this.gameService.getAccomplishments().
    subscribe(
       (players) => {
        if (players !== null) {
          this.players = players;
        }
      }, (error: HttpErrorResponse ) => { // log to the console in error case.
        console.log(error.message);
        console.log(error);
      }
    );
  }
  getTheFastest(boardSize: number): number {
    const accomplishment = this.players.find((player) => {
      return player.size === boardSize;
      // remember the array is already sorted, so all we need is the find the first player with same boardSize which is the fastest.
    });

    if (accomplishment === undefined) { // if there is no accomplishment return some bigggg number.
      return 99999999999999;
    }

    return accomplishment.totalTime;
  }

  // start (board){
    // this.router.navigateByUrl('board');
  // }

  //public onStart() {
    // this.router.navigate(['/board']).then( (e) => {
      // if (e) {
        // console.log("Navigation is successful!");
      // } else {
        // console.log("Navigation has failed!");
      // }
    // });
// }

}
