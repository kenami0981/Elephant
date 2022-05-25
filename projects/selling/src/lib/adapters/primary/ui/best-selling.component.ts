import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { BestSellDTO } from '../../../application/ports/secondary/dto/best-sell.dto';
import { BestSellHeadingDTO } from '../../../application/ports/secondary/dto/best-sell-heading.dto';
import { GETS_ALL_BEST_SELL_DTO, GetsAllBestSellDtoPort } from '../../../application/ports/secondary/dto/gets-all-best-sell.dto-port';
import { GETS_ONE_BEST_SELL_HEADING_DTO, GetsOneBestSellHeadingDtoPort } from '../../../application/ports/secondary/dto/gets-one-best-sell-heading.dto-port';

@Component({ selector: 'lib-best-selling', templateUrl: './best-selling.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class BestSellingComponent {
  bestSells$: Observable<BestSellDTO[]> = this._getsAllBestSellDto.getAll();
  bestSellHeading$: Observable<BestSellHeadingDTO> = this._getsOneBestSellHeadingDto.getOne('wLYq7zOK9ULgKdB1QPbt');

  constructor(@Inject(GETS_ALL_BEST_SELL_DTO) private _getsAllBestSellDto: GetsAllBestSellDtoPort, @Inject(GETS_ONE_BEST_SELL_HEADING_DTO) private _getsOneBestSellHeadingDto: GetsOneBestSellHeadingDtoPort) {
  }
}
