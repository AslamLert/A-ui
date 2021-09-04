import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getCustomerData();
  }

  getCustomerData(){
    //console.log('Hello Custome');
    this.dataService.getData().subscribe(res => {
      //console.log(res);
      this.customers = res;
    });
  }

  insertData(){
    console.log('Hello')
  }

}
