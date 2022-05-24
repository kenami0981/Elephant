import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({ selector: 'lib-hero', templateUrl: './hero.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class HeroComponent {
}
