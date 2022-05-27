import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TestimonialsDTO } from './testimonials.dto';

export const GETS_ONE_TESTIMONIALS_DTO =
  new InjectionToken<GetsOneTestimonialsDtoPort>('GETS_ONE_TESTIMONIALS_DTO');

export interface GetsOneTestimonialsDtoPort {
  getOne(id: string): Observable<TestimonialsDTO>;
}
