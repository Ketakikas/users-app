import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {
contactNumber=9958772058;
myName:string="Dushyant Jha";
filteredStatus:string='';
sortBy:string='';
todoCollection=[
  {label:"Shopping",status:"pending"},
  {label:"Exercise",status:"completed"},
  {label:"Groceries",status:"pending"},
  {label:"Jumping",status:"completed"}
];

  promise=new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve("abc abc");
      },3000 );
  })
  onAddNewTodo() {
    this.todoCollection.push({label : "Buy vegetables", status : "completed"})
    this.todoCollection.push({label : "Walking", status : "pending"})
    // this.todoCollection = [
    //   { label: 'shopping', status: 'pending' },
    //   { label: 'planting', status: 'completed' },
    //   { label: 'grocery', status: 'pending' },
    //   { label: 'insurance', status: 'completed' },
    //   { label: 'New ITem', status: 'pending' },
    // ];
  }
}