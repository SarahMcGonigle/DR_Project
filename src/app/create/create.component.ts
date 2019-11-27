import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { GroceryServiceService } from '../Services/grocery-service.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private groceryService: GroceryServiceService) { }

  ngOnInit() {
  }
  myDate : Date;
  onAddgrocery(form: NgForm) {
    
    if(!form.valid)
    {
      return;
    }

    console.log(form.value);
    console.log(form.value.date);
    this.myDate = new Date(form.value.date);
    console.log(this.myDate);

    this.groceryService.AddGroceryInformation(form.value.name,
      form.value.price, form.value.category).subscribe(
        ()=>{
          //do something after out operation has finished
        }
      );
    console.log(form.value);
    form.resetForm();
  }

}