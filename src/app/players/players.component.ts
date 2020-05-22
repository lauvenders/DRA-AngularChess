import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[];

  selectedPlayer: Player;

  // onSelect(player: Player): void {
  //   this.selectedPlayer = player;
  //   this.messageService.add(`PlayerService: Selected player id=${player.id}`);
  // }

  constructor(private playerService: PlayerService, private messageService: MessageService) { }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players);
  }

  ngOnInit() {
    this.getPlayers();
  }

  add(name: string, country: string, title: string): void {
    name = name.trim();
    if (!name) { return; }
    let player = {name, country, title} as Player;
    this.playerService.addPlayer(player)
      .subscribe(player => {
        this.players.push(player);
      });
  }

  delete(player: Player): void {
    this.players = this.players.filter(h => h !== player);
    this.playerService.deletePlayer(player).subscribe();
  }

}