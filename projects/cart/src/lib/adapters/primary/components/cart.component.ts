import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lib-cart',
  templateUrl: './cart.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  count: number = 0;

  incCounter(type: string) {
    if (type === 'add') {
      this.count++;
    }
  }
  decrCounter(type: string) {
    if (type === 'minus') {
      this.count = this.count - 1 > 0 ? this.count - 1 : 0;
    }
  }
}
