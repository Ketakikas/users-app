import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent {
  note:string;

  @Output()
  onAddNote=new EventEmitter<any>();

  AddNote(){
    this.onAddNote.emit(this.note);
  }
}