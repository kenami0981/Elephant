import { NgModule } from '@angular/core';
import { InMemoryProductContextStorage } from './in-memory-product-context.storage';
import { SETS_STATE_PRODUCT_CONTEXT } from '../../../application/ports/secondary/context/sets-state-product.context-port';
import { SELECTS_PRODUCT_CONTEXT } from '../../../application/ports/secondary/context/selects-product.context-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryProductContextStorage,
    {
      provide: SETS_STATE_PRODUCT_CONTEXT,
      useExisting: InMemoryProductContextStorage,
    },
    { provide: SELECTS_PRODUCT_CONTEXT, useExisting: InMemoryProductContextStorage }
  ],
  exports: [],
})
export class InMemoryProductContextStorageModule {}
