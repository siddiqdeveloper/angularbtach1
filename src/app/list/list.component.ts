import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public api:ApiService) { 
   
  }

  list:any=[];

onGet()
{
  this.api.get().subscribe((res:any)=>{
      console.log(res);
      this.list=res;
      
  })
  
}
onRemove(item:any)
  {
    
    this.api.delete(item.id).subscribe((e:any)=>{}); 
    console.log('Removed')
    this.onGet(); 
  }

  onEdit(item:any){
    this.api.delete(item.id).subscribe((e:any)=>{});



  }

  ngOnInit(): void {
  }

}
