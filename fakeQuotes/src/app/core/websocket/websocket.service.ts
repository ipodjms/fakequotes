import { Injectable, Injector, Inject, OnInit } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { Quote } from '@angular/compiler';
// import 'rxjs/add/observable/interval';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService implements OnInit {
  ngOnInit(): void {
    this.setData();
  }


  public mySubject: Subject<any> = new Subject();
  public latestData: Observable<any> = this.mySubject.asObservable();
  // @Output() notify = new EventEmitter<any>();
  public mock = [
  {"GNDI3": 5.09, "timestamp": 1576148104.827136},
  {"RADL3": 52.63, "timestamp": 1576148104.911129},
  {"MRFG3": 8.55, "timestamp": 1576148104.982268},
  {"BTOW3": 16.95, "timestamp": 1576148105.070958},
  {"CVCB3": 106.74, "timestamp": 1576148105.13828},
  {"PCAR4": 10.94, "timestamp": 1576148105.225677},
  {"GOLL4": 31.3, "timestamp": 1576148105.296885},
  {"IRBR3": 36.98, "timestamp": 1576148105.390368},
  {"SBSP3": 33.1, "timestamp": 1576148105.452549},
  {"CMIG4": 64.53, "timestamp": 1576148105.547359},
  {"LREN3": 122.13, "timestamp": 1576148105.609065},
  {"VVAR3": 7.26, "timestamp": 1576148105.700669},
  {"LREN3": 118.81, "timestamp": 1576148105.766249},
  {"BBAS3": 122.93, "timestamp": 1576148105.857967},
  {"AZUL4": 23.76, "timestamp": 1576148105.923288},
  {"CCRO3": 42.1, "timestamp": 1576148106.013911},
  {"SUZB3": 91.44, "timestamp": 1576148106.076862},
  {"IRBR3": 39.04, "timestamp": 1576148106.166506},
  {"KROT3": 24.98, "timestamp": 1576148106.231095},
  {"IRBR3": 46.2, "timestamp": 1576148106.323554},
  {"BRFS3": 21.95, "timestamp": 1576148106.386299},
  {"SUZB3": 94.81, "timestamp": 1576148106.477088},
  {"MRFG3": 7.45, "timestamp": 1576148106.542377},
  {"ELET6": 5.26, "timestamp": 1576148106.633512},
  {"CMIG4": 65.74, "timestamp": 1576148106.703688},
  {"RAIL3": 35.61, "timestamp": 1576148106.791341},
  {"BBSE3": 94.7, "timestamp": 1576148106.859094},
  {"BBSE3": 79.22, "timestamp": 1576148106.949279},
  {"B3SA3": 64.99, "timestamp": 1576148107.015218},
  {"KROT3": 22.16, "timestamp": 1576148107.10468},
  {"PCAR4": 13.35, "timestamp": 1576148107.169711},
  {"CIEL3": 39.83, "timestamp": 1576148107.260662},
  {"SUZB3": 109.14, "timestamp": 1576148107.324547},
  {"PETR3": 17.87, "timestamp": 1576148107.414731},
  {"BRDT3": 7.09, "timestamp": 1576148107.481541},
  {"BRDT3": 7.0, "timestamp": 1576148107.571495},
  {"PETR4": 5.57, "timestamp": 1576148107.635245},
  {"CVCB3": 107.71, "timestamp": 1576148107.726486},
  {"CVCB3": 132.45, "timestamp": 1576148107.79348},
  {"MRFG3": 7.33, "timestamp": 1576148107.886695},
  {"ELET6": 5.58, "timestamp": 1576148107.948759},
  {"PCAR4": 16.23, "timestamp": 1576148108.045544},
  {"KROT3": 20.13, "timestamp": 1576148108.102745},
  {"ITSA4": 22.88, "timestamp": 1576148108.20824}]


  constructor(
    private injector: Injector,
    @Inject('url') public url: string,
    @Inject('endpoint') public endpoint: string,
  ) {
    this.get();
  }

  getItems() {
    return this.latestData;
  }

  public setData() {
    this.mySubject.next(this.get());
  }

  public get(): any {
    let socket = new WebSocket(`${this.url}/${this.endpoint}`);
    let teste;
    socket.onmessage = function (event) {
     // console.log (event.data)
    // return  event.data;
      };
    //this.mySubject.next('teste');
    // console.log (teste);
  }

}
