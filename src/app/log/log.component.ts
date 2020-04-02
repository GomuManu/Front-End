import { MessagesService } from './../servicios/messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  myMessage: string[];

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.myMessage = this.messagesService.messages;
  }

}
