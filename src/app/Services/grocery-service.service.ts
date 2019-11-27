import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Grocery} from '../grocery.model';

@Injectable({
  providedIn: 'root'
})
export class GroceryServiceService {

  constructor(private http:HttpClient) { }

  GetGroceryInformation():Observable<any>{
    return this.http.get('http://localhost:4000/api/Grocerys');
  }

  AddGroceryInformation(name:string,price:string,category:string):Observable<any>{
    const grocery:Grocery = {name:name, price:price, category:category};
    return this.http.post('http://localhost:4000/api/Grocerys', grocery)
  }

  DeleteGrocery(id:String):Observable<any>{
    return this.http.delete('http://localhost:4000/api/Grocerys/'+id);
  }

  GetGrocery(id:String):Observable<any>{
    return this.http.get('http://localhost:4000/api/Grocerys/'+id);
  }

  UpdateGrocery(id:String,name:string, price:string, category:string):Observable<any>{
    const grocery:Grocery = {name:name, price:price, category:category};
    console.log("Edit"+id);
    return this.http.put('http://localhost:4000/api/Grocerys/'+id, grocery);
  }



}
