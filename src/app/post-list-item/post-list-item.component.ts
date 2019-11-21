import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post;

  constructor() {
  }

  ngOnInit() {
  }

  // Function for counting opinions
  onOpinion(value: string) {
    if (value === 'love') {
      this.post.loveIts ++;
    } else if (value === 'dontLove') {
      this.post.loveIts --;
    }
  }
}
