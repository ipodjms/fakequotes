import { Injectable, Injector, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  //const sequence = new Observable(sequenceSubscriber);

  constructor(
    private injector: Injector,
    @Inject('url') public url: string,
    @Inject('endpoint') public endpoint: string,
  ) {}

  public get(): void {
    let socket = new WebSocket(`${this.url}/${this.endpoint}`);
    socket.onmessage = function (event) {
          console.log (event.data);
          return event.data;
    };
  }

}
