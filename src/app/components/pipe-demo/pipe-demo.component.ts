import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {
  promise=new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve("abc abc");
      },3000 );
  })
}