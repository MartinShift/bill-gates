import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  title = 'bill-gates';

  image='https://upload.wikimedia.org/wikipedia/commons/1/19/Bill_Gates_June_2015.jpg';

  quotes = [
    'If you think your teacher is tough, wait until you get a boss.',
    'Life is not fair — get used to it!',
    'Success is a lousy teacher. This seduces smart people into thinking they can’t lose.',
    'Be nice to nerds.'
  ];

  bio = 'Bill Gates is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft Corporation.';

  resources = [
    { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Bill_Gates' },
    { name: 'Gates Foundation', url: 'https://www.gatesfoundation.org/' },
    { name: 'Gates Notes', url: 'https://www.gatesnotes.com/' },
    { name: 'Twitter', url: 'https://twitter.com/billgates' }
  ];
}