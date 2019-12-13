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
  public loading = true;
  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    console.log ("quoteList");
    this.getQuotes(); 
  }

  public getQuotes() {
    this.quoteService.quoteItem$.subscribe(quotes => {
      console.log (quotes);
      this.quotes = quotes;
      if (this.quotes) {
       this.orderByHighPrice();
      }
      this.loading = false;
    });
  }

  public reloadItens() { 
    this.quoteService.clearQuoteItem();
    this.quoteService.startConnection();
    this.loading = true;
  }

  public orderByLowPrice() {
    this.quotes = this.quotes
  .filter((quotes, index) => this.quotes.lastIndexOf(quotes) === index)
  .sort((a, b) => a.value < b.value ? -1 : 1);
    console.log(this.quotes);
  }

  public orderByHighPrice() {
    this.quotes = this.quotes
  .filter((quotes, index) => this.quotes.lastIndexOf(quotes) === index)
  .sort((a, b) => a.value > b.value ? -1 : 1);
    console.log(this.quotes);
  }

}
