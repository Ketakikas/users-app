import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SeletceNote } from '../notes/notes.component';

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent implements OnInit,OnChanges {
  @Input()
  note:SeletceNote;
  @Output()
  onDeleteEvent=new EventEmitter<any>();
  @Output()
  onEditEvent=new EventEmitter<any>();
  constructor() { }
  DeleteNote(){
    this.onDeleteEvent.emit(this.note);
  }
  EditNote(){
    console.log("emmitting "+this.note);
    this.onEditEvent.emit(this.note);
  }
  ngOnChanges(changes: SimpleChanges): void {  
  }

  ngOnInit(): void {
  }

}
