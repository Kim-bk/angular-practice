import { Component } from "@angular/core";
import { authors, Author } from '../../authors';

@Component({
  selector:'author-list',
  templateUrl: './author-list.component.html',
})

export class AuthorListComponent{
  authors = authors
  selectedAuthor = authors[0];
  constructor() { }

  ngOnInit() {
  }

  handleDelete(author: Author) {
    this.authors = this.authors.filter(item => item.id !== author.id);
  }

  onSelected(onSelectedAuthor: Author) {
    this.selectedAuthor = onSelectedAuthor;
  }
  
  onDeleted(authorId : number){
    this.authors = this.authors.filter(item => item.id !== authorId)
    if (this.selectedAuthor.id === authorId)
    {
      this.selectedAuthor = this.authors[0];
    }
  }
}
