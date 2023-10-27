import { createAction, props } from '@ngrx/store';
import { CustomerModel } from 'src/app/core/models/customer.interface';

export const loadCustomer = createAction(
  '[Customer List] Load customers',
//   props<{ username: string; password: string }>()
);

export const loadedCustomer = createAction(
    '[Customer List] Load customers',
    props<{ customer : CustomerModel[] }>()
);