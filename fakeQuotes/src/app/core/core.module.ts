import { WebsocketService } from './websocket/websocket.service';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent],
  providers: [WebsocketService]
})
export class CoreModule { }
