import { QuoteObj } from './../../quotes/shared/quote';
import { Injectable, Injector, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  
  private quoteItemSource = new Subject<QuoteObj[]>(); 
  public quoteItem$ = this.quoteItemSource.asObservable();
 

  public myArray = [];
  public quoteArray: QuoteObj[] = [];

  constructor(
    private injector: Injector,
    @Inject('url') public url: string,
    @Inject('endpoint') public endpoint: string,
  ) {
    this.startConnection();
  }

  public startConnection(): void {
    const self = this;
    const connection = new WebSocket(`${this.url}/${this.endpoint}`);
    let count = 0;
    //  Log messages from the server
    connection.onmessage = function(e) {
        count = count + 1;
        self.getItensByServer(e.data, connection, count);
        console.log(count);
    };
  }

  public setQuoteItem(quoteObj: QuoteObj[]): void {
    this.quoteItemSource.next(quoteObj);
  }

  public clearQuoteItem(): void {
    this.quoteItemSource.next(null);
  }

  public getItensByServer(e, conn, count) {
    this.myArray.push(JSON.parse(e));
    if (count === 10) {
        conn.close();        
        this.transformData(this.myArray);
    }
}

public transformData(data) {
    data.map(item => {
      const time: number = item.timestamp;
      const itemobj: string[] = Object.keys(item);
      const name: string = itemobj[0];
      const value = Object.values(item);
      const price: number = Number(value[0]);
      const quote = new QuoteObj();
      quote.name = name;
      quote.timeStamp = time;
      quote.value = price;
     // console.log (quote);
      this.quoteArray.push(quote);
    })
    this.setQuoteItem(this.quoteArray);
  }
}
