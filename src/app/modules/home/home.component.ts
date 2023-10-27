import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCustomer } from 'src/app/state/customer/customer.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private store : Store<any>
  ){}

  ngOnInit(){
    this.store.dispatch(loadCustomer());
  }
}
