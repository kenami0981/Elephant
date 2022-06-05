import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { BenefitDTO } from '../../../application/ports/secondary/benefit.dto';
import {
  GETS_ALL_BENEFIT_DTO,
  GetsAllBenefitDtoPort,
} from '../../../application/ports/secondary/gets-all-benefit.dto-port';

@Component({
  selector: 'lib-benefit',
  templateUrl: './benefit.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenefitComponent {
  benefits$: Observable<BenefitDTO[]> = this._getsAllBenefitDto.getAll();

  constructor(
    @Inject(GETS_ALL_BENEFIT_DTO)
    private _getsAllBenefitDto: GetsAllBenefitDtoPort
  ) {}
}
