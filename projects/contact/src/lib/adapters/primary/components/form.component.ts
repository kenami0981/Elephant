import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ADDS_CONTACT_DTO, AddsContactDtoPort } from '../../../application/ports/secondary/dto/adds-contact.dto-port';
import Swal from 'sweetalert2' 

@Component({ 
    selector: 'lib-form', 
    templateUrl: './form.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })
export class FormComponent {
  readonly contact: FormGroup = new FormGroup({
      name: new FormControl(), 
      email: new FormControl(), 
      message: new FormControl()});

  constructor(@Inject(ADDS_CONTACT_DTO) private _addsContactDto: AddsContactDtoPort) {
  }

  

onContactSubmited(contact: FormGroup): void {
  this._addsContactDto.add(contact.getRawValue());
  contact.reset();
  Swal.fire(
    'Message sent!',
    'Well contact you soon.',
    'success'
  )
}
}
