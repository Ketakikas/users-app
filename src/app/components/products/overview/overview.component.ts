import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  prodId:string;
  prodName:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //this.prodId=this.route.snapshot.params["id"]; //this is one time assignment
    this.route.params.subscribe((params:any)=>{   //this is dynamic
      this.prodId=params["id"];
      this.prodName=params["prodName"];
    });
  }

}
