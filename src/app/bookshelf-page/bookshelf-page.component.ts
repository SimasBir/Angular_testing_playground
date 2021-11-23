import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookshelf-page',
  templateUrl: './bookshelf-page.component.html',
  styleUrls: ['./bookshelf-page.component.scss']
})
export class BookshelfPageComponent implements OnInit {
  public selectedSubject: string | null | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
