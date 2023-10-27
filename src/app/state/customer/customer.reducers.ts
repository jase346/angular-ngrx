import { createReducer } from "@ngrx/store";
import { CustomerModel } from "src/app/core/models/customer.interface";

//export const initialState : ReadonlyArray<CustomerModel> = []

export const initialState : {
    loading: boolean,
    customers:ReadonlyArray<CustomerModel>
} = {
    loading: false,
    customers:[]
}