import { Component, OnInit } from '@angular/core';
import { PHRASES } from '../shared/mock-data';
import { Phrase } from '../shared/phrase';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases!: Phrase[];

  constructor() { }

  ngOnInit(): void {
    this.phrases = PHRASES
  }

}
