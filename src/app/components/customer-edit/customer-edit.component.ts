import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/customer';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  id:any;
  data:any;
  customer = new Customer();

  constructor(private route:ActivatedRoute, private dataServices: DataService) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.dataServices.getCustomerById(this.id).subscribe(res => {
      //console.log(res);
      this.data = res;
      this.customer = this.data;
    })
  }

}
