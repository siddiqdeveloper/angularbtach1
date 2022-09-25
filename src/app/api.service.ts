import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { 

    
  }


post(data:any){
   return this.http.post('http://localhost:3001/courses',data);

}


delete(data:any){
  return this.http.delete('http://localhost:3001/courses/'+data);


}

edit(data:any){
  return this.http.put('http://localhost:3001/courses/',data);

}

get(){
  return this.http.get('http://localhost:3001/courses');
  
}



}
