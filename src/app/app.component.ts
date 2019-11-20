import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // Title
  title = 'posts';
  // Array posts
  posts = [
    new Post('Mon premier post', 'Thalassius vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii,' +
      ' considerans incitationem eius ad multorum augeri discrimina, non maturitate vel consiliis mitigabat,' +
      ' ut aliquotiens celsae potestates iras principum molliverunt.', 1),
    new Post('Mon deuxième post', 'Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo', -1),
    new Post('Encore un post', 'Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni' +
      ' locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita.', 0)
  ];
}

class Post {
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;

  constructor(title, content, loveIts) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.createdAt = new Date();
  }
}
