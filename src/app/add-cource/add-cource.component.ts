import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service'


@Component({
  selector: 'app-add-cource',
  templateUrl: './add-cource.component.html',
  styleUrls: ['./add-cource.component.css']
})
export class AddCourceComponent implements OnInit 
{

constructor(public api:ApiService) { 
  
  
}

data:any={title:'',description:'',id:''};

//NgFor:any=[];

onSave()
{
  //let convertData=JSON.parse(JSON.stringify(this.data));
  //this.NgFor.push(convertData);
  this.api.post(this.data).subscribe((e:any)=>{});
 
  }


onEdit(){
 
}

ngOnInit(): void {
  }

}
