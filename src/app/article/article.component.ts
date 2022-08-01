import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input()
  article: Article;

  constructor() {
    this.article = new Article('test', 'test', 10);

  }

  votesUp() :boolean {
    this.article.votesUp();
    console.log(`Votes up : ${this.article.votes}`);
    return false;
  }
  votesDown() : boolean {
    this.article.votesDown();
    console.log(`Votes down ${this.article.votes}`);
    return false;
  }

  ngOnInit(): void {}
}
