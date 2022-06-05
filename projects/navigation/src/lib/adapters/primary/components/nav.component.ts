import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({ selector: 'lib-nav', templateUrl: './nav.component.html', changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./nav.component.scss']
  })
export class NavComponent {
}
