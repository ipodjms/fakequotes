import { WebsocketService } from './../../core/websocket/websocket.service';
import { QUOTEAPI } from './../../shared/consts';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService extends WebsocketService{

  constructor(injector: Injector) {
    super(injector, QUOTEAPI, "quotes");
  }
}

