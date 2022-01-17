import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{
  notes:string[];
  selectedNote:SeletceNote;
  showEdit:boolean=false;
  showAdd:boolean;
  ngOnInit(): void {
    this.notes=titles;
  }
  onSelectNote(note : string){
    const index = this.notes.findIndex(n => n.toUpperCase() === note.toUpperCase())
    this.selectedNote = {id : index, title : note};
    console.log("Selected Note : ", this.selectedNote);
    this.showEdit = true;
  }
  onDeleteNote(note:SeletceNote){
    console.log(note.id+" to be deleted with value "+note.title);
    this.notes.splice(note.id,1);
    this.showEdit=false;
  }
  onEditNote(note:SeletceNote){
    console.log(note.id+" to be edited with value "+note.title);
    this.notes[note.id]=note.title;
    this.showEdit=false;
  }
  AddNote(note:string){
    this.notes.push(note);
    this.showEdit=false;
    this.showAdd=false;
  }
}

export class SeletceNote{
  id:number;
  title:string;
}

export const titles:string[]=["Insurance","Grocery","Banking","Personal"];
