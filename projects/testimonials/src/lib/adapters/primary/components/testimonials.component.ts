import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TestimonialsDTO } from '../../../application/ports/secondary/dto/testimonials.dto';
import {
  GETS_ALL_TESTIMONIALS_DTO,
  GetsAllTestimonialsDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-testimonials.dto-port';
import {
  GETS_ONE_TESTIMONIALS_DTO,
  GetsOneTestimonialsDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-testimonials.dto-port';

@Component({
  selector: 'lib-testimonials',
  templateUrl: './testimonials.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  testimonials$: Observable<TestimonialsDTO[]> =
    this._getsAllTestimonialsDto.getAll();
  testimonial$: Observable<TestimonialsDTO> =
    this._getsOneTestimonialsDto.getOne('unkWazx2qcyLMwjE1rrN');

  constructor(
    @Inject(GETS_ALL_TESTIMONIALS_DTO)
    private _getsAllTestimonialsDto: GetsAllTestimonialsDtoPort,
    @Inject(GETS_ONE_TESTIMONIALS_DTO)
    private _getsOneTestimonialsDto: GetsOneTestimonialsDtoPort
  ) {}
}
