import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({ selector: 'app-contact-page', 
templateUrl: './contact.page.html', 
encapsulation: ViewEncapsulation.None, 
changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactPage {
}
