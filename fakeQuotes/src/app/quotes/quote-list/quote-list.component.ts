import { QuoteObj } from './../shared/quote';
import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../shared/quote.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent implements OnInit {

  public quotes: QuoteObj[] = [];
  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    console.log ("quoteList");
    this.quoteService.quoteItem$.subscribe(quotes => {
      console.log (quotes);
      this.quotes = quotes;
    });
    
  }

}
