import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  constructor(private service:SharedService) { }

  CustomerList:any=[];

  ModalTitle!:string;
  ActivateAddEditCustomerComp:boolean=true;
  customer:any;
  ngOnInit(): void {
    this.refreshCustomerList();
  }
  addClick(){
    this.customer={
      ID:0
    }
    this.ModalTitle="Add Customer";
    this.ActivateAddEditCustomerComp=true;
  }
  editClick(){
    this.ModalTitle="Edit Customer";
    this.ActivateAddEditCustomerComp=true;
  }
  closeClick(){
    this.ActivateAddEditCustomerComp=false;
    this.refreshCustomerList();
  }
  refreshCustomerList(){
   // this.service.getCustomerList().subscribe(data=>{
     // debugger;
    //this.CustomerList=data;
        }
      //);

}
