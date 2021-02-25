import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { AddEditAppoinmentComponent } from './appoinment/add-edit-appoinment/add-edit-appoinment.component';
import { AddEditCustomerComponent } from './customer/add-edit-customer/add-edit-customer.component';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44370/api"

  constructor(private http:HttpClient ) { }

getAppointmentList()
{
  return this.http.get<any>(this.APIUrl+'/Appointment/allAppointments');
}

addAppoinment(val:any){
return this.http.post(this.APIUrl+'/Appoinment/CreateAppoinments',val);
}

editAppoinment(val:any){
return this.http.put(this.APIUrl+'/Appoinment/UpdateAppoinments',val);
}

deleteAppoinment(id:any){
  return this.http.delete(this.APIUrl+'/Appoinment/DeleteAppoinments/'+id);
}

getCustomerList()
{
  return this.http.get<any>(this.APIUrl+'/Appointment/allAppointments');
}

addCustomer(val:any){
return this.http.post(this.APIUrl+'/appoinment',val);
}

editCustomer(val:any){
return this.http.put(this.APIUrl+'/appoinment',val);
}

deleteCustomer(id:any){
  return this.http.delete(this.APIUrl+'/appoinment/'+id);
}

dealerDropdown():Observable<any[]>{
  return this.http.get<any>(this.APIUrl + '/Dealer/DealerDropdown');
}

getCustomerVehicleInfo(LicencePlate: string):Observable<any>{
  return this.http.get<any>(this.APIUrl + "/Vehicle/GetVehicleInfo?LicencePlate=" + LicencePlate);
}
}
