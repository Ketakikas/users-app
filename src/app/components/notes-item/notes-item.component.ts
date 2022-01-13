import { Component,Output, OnInit,Input,EventEmitter } from '@angular/core';
import { SeletceNote, titles } from '../notes/notes.component';

@Component({
  selector: 'app-notes-item',
  templateUrl: './notes-item.component.html',
  styleUrls: ['./notes-item.component.css']
})
export class NotesItemComponent implements OnInit {
  @Input()
  note:string;

  @Output()
  childevent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  noteClick(){
    this.childevent.emit(this.note);
  }
}
