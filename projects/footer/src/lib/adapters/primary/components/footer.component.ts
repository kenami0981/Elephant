import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FooterTextDTO } from '../../../application/ports/secondary/dto/footer-text.dto';
import { FooterIconDTO } from '../../../application/ports/secondary/dto/footer-icon.dto';
import { GETS_ALL_FOOTER_TEXT_DTO, GetsAllFooterTextDtoPort } from '../../../application/ports/secondary/dto/gets-all-footer-text.dto-port';
import { GETS_ONE_FOOTER_TEXT_DTO, GetsOneFooterTextDtoPort } from '../../../application/ports/secondary/dto/gets-one-footer-text.dto-port';
import { ADDS_FOOTER_FORM_DTO, AddsFooterFormDtoPort } from '../../../application/ports/secondary/dto/adds-footer-form.dto-port';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  texts$: Observable<FooterTextDTO[]> = this._getsAllFooterTextDto.getAll();
  text$: Observable<FooterTextDTO> = this._getsOneFooterTextDto.getOne(
    'WsuNGEWIfaD9aS7u3Vry'
  );

  readonly footerForm: FormGroup = new FormGroup({
        email: new FormControl(),
       submit: new FormControl() });

  constructor(
    @Inject(GETS_ALL_FOOTER_TEXT_DTO)
    private _getsAllFooterTextDto: GetsAllFooterTextDtoPort,
    @Inject(GETS_ONE_FOOTER_TEXT_DTO)
    private _getsOneFooterTextDto: GetsOneFooterTextDtoPort,
   @Inject(ADDS_FOOTER_FORM_DTO) private _addsFooterFormDto: AddsFooterFormDtoPort
  ) {}

  onSubmitSendemailed(footerForm: FormGroup): void {
    if (footerForm.invalid) {
        return;
      }
    this._addsFooterFormDto.add({
        email: this.footerForm.get('email')?.value,
    }).subscribe();
    this.footerForm.reset();
  }
}
