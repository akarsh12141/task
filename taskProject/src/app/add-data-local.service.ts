import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddDataLocalService {

  constructor() { }
  putData(values_username: any,values_data: any)
  {
    console.warn(values_username);
    
  }
  getData()
  {
    console.warn("service working done");
  }
}
