import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { BillingDetailsDTO } from './billing-details.dto';

export const ADDS_BILLING_DETAILS_DTO =
  new InjectionToken<AddsBillingDetailsDtoPort>('ADDS_BILLING_DETAILS_DTO');

export interface AddsBillingDetailsDtoPort {
  add(billingDetails: Partial<BillingDetailsDTO>): Observable<void>;
}
