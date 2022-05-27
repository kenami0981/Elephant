import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TestimonialsDTO } from './testimonials.dto';

export const GETS_ALL_TESTIMONIALS_DTO =
  new InjectionToken<GetsAllTestimonialsDtoPort>('GETS_ALL_TESTIMONIALS_DTO');

export interface GetsAllTestimonialsDtoPort {
  getAll(): Observable<TestimonialsDTO[]>;
}
