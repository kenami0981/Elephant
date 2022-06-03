import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterBottomDTO } from '../../../application/ports/secondary/dto/footer-bottom.dto';
import { FooterIconDTO } from '../../../application/ports/secondary/dto/footer-icon.dto';
import { GETS_ALL_FOOTER_BOTTOM_DTO, GetsAllFooterBottomDtoPort } from '../../../application/ports/secondary/dto/gets-all-footer-bottom.dto-port';
import { GETS_ALL_FOOTER_ICON_DTO, GetsAllFooterIconDtoPort } from '../../../application/ports/secondary/dto/gets-all-footer-icon.dto-port';

@Component({
  selector: 'lib-footer-bottom',
  templateUrl: './footer-bottom.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterBottomComponent {
  texts$: Observable<FooterBottomDTO[]> = this._getsAllFooterBottomDto.getAll();
  icons$: Observable<FooterIconDTO[]> = this._getsAllFooterIconDto.getAll();

  constructor(
    @Inject(GETS_ALL_FOOTER_BOTTOM_DTO)
    private _getsAllFooterBottomDto: GetsAllFooterBottomDtoPort, @Inject(GETS_ALL_FOOTER_ICON_DTO) private _getsAllFooterIconDto: GetsAllFooterIconDtoPort
  ) {}
}
