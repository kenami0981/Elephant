import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({ 
    selector: 'lib-form', 
    templateUrl: './form.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })
export class FormComponent {
}
