import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bulk-user-plan',
  templateUrl: './user-plan.component.html',
  styleUrls: ['./user-plan.component.scss']
})
export class UserPlanComponent implements OnInit {

  
  corporate = false;
  personal = false;
  hybrid = false;
  prePaid = false;
  postPaid = false;
  others = false;

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


  constructor() { }

  ngOnInit(): void {
  }

}
