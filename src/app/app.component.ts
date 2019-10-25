import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Variables
  users: User;
  pageSize: number = 3;
  initialPage: number = 1;
  pageOfItems: User[];

  // @Inputs()

  // @Outputs()

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  /**
   * Gets users
   */
  getUsers() {
    this.userService.getUsers()
      .subscribe((user: User) => {
        this.users = user;
      });
  }

  /**
   * Determines whether page is changed
   * @param pageOfItems 
   */
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
