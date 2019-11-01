import { Component} from '@angular/core';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent {
   players:any[];
   constructor()
   {
     this.players=[
       {name:"Rohit sharma",age:"32 yrs 177 days",role:"top-order batsman",batting:"right hand bat",bowling:"right arm offbreak",impath:"/assets/1.jpeg"},
       {name:"Yuzvendra Chahal",age:"29 yrs 93 days",role:"bowler",batting:"right hand bat",bowling:"legbreak googly",impath:"/assets/2.jpeg"},
       {name:"Manish Pandey",age:"30 yrs 44 days",role:"top-order batsman",batting:"right hand bat",bowling:"right arm medium",impath:"/assets/3.jpeg"},
       {name:"Rishabh pant",age:"22 yrs 20 days",role:"Wicketkeeper batsman",batting:"left hand bat",bowling:"--",impath:"/assets/4.jpeg"},
       {name:"Sanju Samson",age:"24 yrs 347 days",role:"Wicketkeeper batsman",batting:"right hand bat",bowling:"--",impath:"/assets/5.jpeg"}
      ];
   }

}
