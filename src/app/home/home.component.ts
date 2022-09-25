import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public route:ActivatedRoute,public r:Router) { 

    console.log(route.snapshot.params)
  }

  ngOnInit(): void {
  }

test(){

  //this.r.navigateByUrl('/home/'+item.id)
}

}
