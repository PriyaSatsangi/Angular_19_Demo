import { Component, inject, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User} from '../user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-user-with-json',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './user-with-json.component.html',
  styleUrl: './user-with-json.component.css'
})
export class UserWithJsonComponent implements OnInit{
  userobj: User = new User();
  users: User[]=[];

  http = inject(HttpClient);

   ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get<User[]>("http://localhost:3000/users").subscribe((res: User[])=>{
      this.users=res;
    })

  }
  
}
