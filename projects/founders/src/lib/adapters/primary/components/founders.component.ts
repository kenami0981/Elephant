import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { FoundersDTO } from '../../../application/ports/secondary/dto/founders.dto';
import {
  GETS_ALL_FOUNDERS_DTO,
  GetsAllFoundersDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-founders.dto-port';
import {
  GETS_ONE_FOUNDERS_DTO,
  GetsOneFoundersDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-founders.dto-port';

@Component({
  selector: 'lib-founders',
  templateUrl: './founders.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoundersComponent {
  founders$: Observable<FoundersDTO[]> = this._getsAllFoundersDto.getAll();
  title$: Observable<FoundersDTO> = this._getsOneFoundersDto.getOne('WJIXfK3kg7kGX5sECbxU');

  constructor(
    @Inject(GETS_ALL_FOUNDERS_DTO)
    private _getsAllFoundersDto: GetsAllFoundersDtoPort,
    @Inject(GETS_ONE_FOUNDERS_DTO)
    private _getsOneFoundersDto: GetsOneFoundersDtoPort
  ) {}
}
