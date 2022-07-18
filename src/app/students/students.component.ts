import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  httpdata: any;
  constructor(public usersServiceObj: UsersService) {}

  ngOnInit(): void {
    this.usersServiceObj.getUsers().subscribe((students) => {
      this.httpdata = students;
    });
  }
}
