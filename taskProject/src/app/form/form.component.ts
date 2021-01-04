import { Component, OnInit} from '@angular/core';
import { AddDataLocalService } from '../add-data-local.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers : [AddDataLocalService]
})
export class FormComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor() 
    { }
  x=0;
  k=this.x++;
  values_userName: any;
  values_data: any;
  private user:AddDataLocalService;
  getuser(value: { username: any; Email: any; password: any; })
    {
      //this.user.getData();
      this.values_userName=value.username; 
      this.values_data=value.Email+value.password;
      localStorage.setItem(this.values_userName,this.values_data);
      console.warn(localStorage.getItem(this.values_userName));
    }
    //this.user.putData(this.values_userName,this.values_data);
}
