import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
     let socket = new WebSocket("ws:0.0.0.0:8080/quotes");
     socket.onmessage = function (event) {
          console.log (event.data);
    };
  }
  title = 'fakeQuotes';
}
