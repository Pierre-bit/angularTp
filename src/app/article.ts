export class Article {
  title: string;
  link: string;
  votes: number;
  constructor(newTitle: string, newLink: string, newVotes?: number) {
    this.title = newTitle;
    this.link = newLink;
    this.votes = newVotes || 0;
  }

  votesUp() : void{
    this.votes += 1;
    console.log(`Votes up : ${this.votes}`);
  }
  votesDown() : void{
    this.votes -= 1;
    console.log(`Votes down ${this.votes}`);

  }
}
