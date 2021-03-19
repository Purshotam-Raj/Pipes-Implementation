import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  birthday = new Date(1998, 4, 11);
  toggle = true;
  power: number = 5;
  factor: number = 1;
  user = {
    userId: 20,
    firstName: 'Ravi',
    lastName: 'Ranjan',
    DOB: '07/26/1997',
    salary: 5000093000.42,
    city: 'New Delhi',
    citycode: 'NY',
    joiningDate: Date.now()
  };
  users = [{
    userId: 20,
    firstName: 'Ravi',
    city: 'New Delhi',
    citycode: 'NY'
  },
  {
    userId: 24,
    firstName: 'Purshotam',
    city: 'Gaya',
    citycode: 'GY'
  },
  {
    userId: 77,
    firstName: 'Vivek',
    city: 'Patna',
    citycode: 'PT'
  }];

  phone = {
    code: 'India',
    num: 9122572479
  }

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }


}
