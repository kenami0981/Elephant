import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ADDS_BILLING_DETAILS_DTO,
  AddsBillingDetailsDtoPort,
} from '../../../application/ports/secondary/dto/adds-billing-details.dto-port';

@Component({
  selector: 'lib-checkout',
  templateUrl: './checkout.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent {
  constructor(
    @Inject(ADDS_BILLING_DETAILS_DTO)
    private _addsBillingDetailsDto: AddsBillingDetailsDtoPort
  ) {}

  readonly checkout: FormGroup = new FormGroup({
    fullName: new FormControl(),
    streetAddress: new FormControl(),
    city: new FormControl(),
    phone: new FormControl(),
    emialAddress: new FormControl(),
  });

  onCheckoutSubmited(form: FormGroup) {
    // this._addsBillingDetailsDto.add({

    // }).subscribe();
  }

}
