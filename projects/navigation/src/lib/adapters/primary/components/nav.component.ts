import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationDTO } from '../../../application/ports/secondary/dto/navigation.dto';
import { GETS_ALL_NAVIGATION_DTO, GetsAllNavigationDtoPort } from '../../../application/ports/secondary/dto/gets-all-navigation.dto-port';

@Component({ selector: 'lib-nav', templateUrl: './nav.component.html', changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./nav.component.scss']
  })
export class NavComponent {
  navigation$: Observable<NavigationDTO[]> = this._getsAllNavigationDto.getAll();

  constructor(@Inject(GETS_ALL_NAVIGATION_DTO) private _getsAllNavigationDto: GetsAllNavigationDtoPort) {
  }
}
