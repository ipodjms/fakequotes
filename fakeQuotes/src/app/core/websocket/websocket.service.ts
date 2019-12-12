import { Injectable, Injector, Inject } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { Quote } from '@angular/compiler';
// import 'rxjs/add/observable/interval';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {


  public mySubject: Subject<any> = new Subject();
  public latestData: Observable<any> = this.mySubject.asObservable();

  constructor(
    private injector: Injector,
    @Inject('url') public url: string,
    @Inject('endpoint') public endpoint: string,
  ) {
    this.setData();
  }

  getItems() {
    return this.latestData;
  }

  public setData() {
    this.mySubject.next(this.get());
  }

  public get(): any {
    let socket = new WebSocket(`${this.url}/${this.endpoint}`);
    socket.onmessage = function (event) {
    };
    this.mySubject.next('teste');
  }

}
