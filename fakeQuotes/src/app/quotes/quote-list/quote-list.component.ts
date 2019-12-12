import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../shared/quote.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent implements OnInit {

  public teste;
  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.teste = this.quoteService.mock;
    console.log (this.  teste);
  }

}
