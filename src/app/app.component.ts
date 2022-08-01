import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TP2reddit';
  place1 = 'Title';
  place2 = 'Link';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 10),
      new Article('Fullstack', 'http://fullstack.io', 20),
      new Article('SpringBoot', 'http://spring.io', 30),
    ];
  }
  // on trie les articles de maniere decroissante
  sortedArticles():Article[] { return this.articles.sort((a :Article, b:Article) => b.votes - a.votes); }

  //ajout d'un article
  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(
      `Adding article element : ${title.value}  and link : ${link.value}`
    );
    //title.value = this.place1;
    //link.value = this.place2;
    this.articles.push(new Article(title.value, link.value,100));
    title.value = ' ';
    link.value = ' ';
    return false;
  }
}
