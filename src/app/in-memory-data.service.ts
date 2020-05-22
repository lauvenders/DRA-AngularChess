import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Player } from './player';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
      { id: 1, name: "Anand Viswanathan", country: "India", title: "Grandmaster" },
      { id: 2, name: "Garry Kasparov", country: "Russia", title: "Grandmaster" },
      { id: 3, name: "Vladimir Kramnik", country: "Russia", title: "Grandmaster" },
      { id: 4, name: "Anatoly Karpov", country: "Russia", title: "Grandmaster" },
      { id: 5, name: "Magnus Carlsen", country: "Norway", title: "Grandmaster" },
      { id: 6, name: "Alexander Alekhine", country: "Russia", title: "Grandmaster" },
      { id: 7, name: "Mijaíl Tal", country: "Latvia", title: "Grandmaster" },
      { id: 8, name: "José Raúl Capablanca", country: "Cuba", title: "None" },
      { id: 9, name: "Wesley So", country: "Philippines", title: "Grandmaster" }
    ];
    return {players};
  }

  // Overrides the genId method to ensure that a player always has an id.
  // If the players array is empty,
  // the method below returns the initial number (11).
  // if the players array is not empty, the method below returns the highest
  // player id + 1.
  genId(players: Player[]): number {
    return players.length > 0 ? Math.max(...players.map(player => player.id)) + 1 : 11;
  }
}