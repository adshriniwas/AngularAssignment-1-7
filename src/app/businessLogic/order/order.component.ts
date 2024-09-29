import { Component } from '@angular/core';
import { OrderModel } from '../../model/order-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  title = "Order Registration form";
  orders:OrderModel = new OrderModel(0,"","","","",0,0);

  constructor(){
    console.log("object value of orders: "+ JSON.stringify(this.orders));
  }
  submit():any{
    console.log("object submit value of orders: "+ JSON.stringify(this.orders));

  }
}
