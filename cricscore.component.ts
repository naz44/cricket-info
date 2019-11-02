import { Component} from '@angular/core';

@Component({
  selector: 'app-cricscore',
  templateUrl: './cricscore.component.html',
  styleUrls: ['./cricscore.component.css']
})
export class CricscoreComponent {
  players:any[];
  play:any=[];
  play1:any=[];
 
  constructor()
  {
    this.players=[
      {name:"JM Baristow",mat:11,scr:532},
      {name:"Babar azam",mat:8,scr:474},
      {name:"AT carey",mat:10,scr:375},
      {name:"JC butler",mat:11,scr:312},
      {name:"HM amla",mat:7,scr:203},
      {name:"asghar afghan",mat:6,scr:154},
      {name:"CR brathwaite",mat:8,scr:154},
      {name:"NM coulter-nile",mat:5,scr:98},
      {name:"MMALI",mat:5,scr:75},
      {name:"FA allen",mat:3,scr:51},
      {name:"SW ambris",mat:2,scr:36},
      {name:"SS cttrell",mat:9,scr:33},
      {name:"Asif ali",mat:2,scr:19}
    ];
  }
  TopScores()
  {
    
    for (var i=0;i<5;i++)
    this.play.push(this.players[i]);

  }
  LeastScores()
  {
    
    var i=12,k=0
    
    for (;k<5;)
    {
      this.play1.push(this.players[i]);
      i-=1;
      k+=1;
    }

  }
}
