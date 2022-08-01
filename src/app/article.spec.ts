import { Title } from '@angular/platform-browser';
import { Article } from './article';

describe('Article', () => {
  it('should create an instance', () => {
    expect(new Article('Angular 2','http://angular.io',10)).toBeTruthy();
  });
});
