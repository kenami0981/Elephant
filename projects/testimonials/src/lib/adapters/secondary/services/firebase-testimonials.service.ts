import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsAllTestimonialsDtoPort } from '../../../application/ports/secondary/dto/gets-all-testimonials.dto-port';
import { GetsOneTestimonialsDtoPort } from '../../../application/ports/secondary/dto/gets-one-testimonials.dto-port';
import { TestimonialsDTO } from '../../../application/ports/secondary/dto/testimonials.dto';

@Injectable()
export class FirebaseTestimonialsService
  implements GetsAllTestimonialsDtoPort, GetsOneTestimonialsDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<TestimonialsDTO[]> {
    return this._client
      .collection<TestimonialsDTO>('testimonials', (ref) =>
        ref.orderBy('id', 'asc')
      )
      .valueChanges({ idField: 'id' });
  }

  getOne(id: string): Observable<TestimonialsDTO> {
    return this._client
      .doc<TestimonialsDTO>('testimonials-heading/' + id)
      .valueChanges({ idField: 'id' })
      .pipe(
        switchMap((item) =>
          item
            ? of(item)
            : throwError(new Error('Item does not exist in firebase'))
        )
      );
  }
}
