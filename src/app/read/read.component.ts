import { Component, OnInit } from '@angular/core';
import { groceryServiceService } from '../Services/grocery-service.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  Mygrocerys: any = [];
  constructor(private groceryService: groceryServiceService) { }

  ngOnInit() {
    this.groceryService.GetgroceryInformation().subscribe((data) => {
      this.Mygrocerys = data.grocerys;
      console.log(this.Mygrocerys);
    })
  }

  onDelete(id:String){
    console.log("Deleting grocery with id: "+id);
    this.groceryService.Deletegrocery(id).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );
  }

}
