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
      this.loading = false;      
    });
  }

  public reloadItens() { 
    this.quoteService.clearQuoteItem();
    this.quoteService.startConnection();
  }

  public orderByHight() { }

}
