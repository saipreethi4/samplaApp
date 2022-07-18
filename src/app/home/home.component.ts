import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'FSD Product';
  isavailable = true;
  name = 'your name';
  month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  buttonclicked() {
    alert('you have clicked');
  }
  value = '';
  /**patashala code which got error */
  // keyUpDemo(event) {//error need to mention datatype of event
  //   this.value = event.target.value;
  //   console.log(this.value);
  // }
  /**solution1 */
  // keyUpDemo(event: KeyboardEvent) {
  //   this.value = (event.target as HTMLInputElement).value;
  //   console.log(this.value);
  // }
  /** solution2*/
  keyUpDemo(event: any) {
    this.value = event.target.value;
    console.log(this.value);
  }
}
