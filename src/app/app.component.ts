import { Component } from '@angular/core';

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
    {
      title: 'Mon premier post',
      content: 'Thalassius vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii,' +
        ' considerans incitationem eius ad multorum augeri discrimina, non maturitate vel consiliis mitigabat,' +
        ' ut aliquotiens celsae potestates iras principum molliverunt.',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, ' +
        'cum artibus honestissimis erudiretur.',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni' +
        ' locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita.',
      loveIts: 0,
      created_at: new Date()
    },

  ];

  // Function for counting opinions
  onOpinionLove() {
    this.loveIts + 1;
  }
  onOpinionNotlove() {
    console.log('test');
  }
}
