import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Voting-project';
  teams: any = [
    {
      teamName: 'FC Barcelona',
      imgURL:
        'https://static.barcelona.com/var/plain/storage/images/media/images/fcb/7102276-1-eng-GB/fcb_medium.jpg',
      count: 0,
    },
    {
      teamName: 'Real Madrid',
      imgURL:
        'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
      count: 0,
    },
    {
      teamName: 'FC Bayern Munich',
      imgURL:
        'https://cdn.shopify.com/s/files/1/1888/7339/files/Bayern_Munich_19_large.jpg?v=1505833062',
      count: 0,
    },
    {
      teamName: 'Liverpool',
      imgURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZp2cBkHCJAFxN_pxMP9fJGuM6656MG1vs8A&usqp=CAU',
      count: 0,
    },
  ];
  vote: number;

  ngOnInit(): void {
  }

  voteButton(i:number) {
  this.teams[i].count = this.teams[i].count + 1;
  }
}
