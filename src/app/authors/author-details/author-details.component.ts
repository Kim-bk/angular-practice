import { Component, EventEmitter, Input, Output } from "@angular/core";
import {  Author } from '../../authors';

@Component({
  selector:'author-details',
  templateUrl: './author-details.component.html',

})

export class AuthorDetailsComponent{
  @Input() author: Author | undefined;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
  constructor() {}
  ngOnInit() {}
  handleDelete() {

  }

}
