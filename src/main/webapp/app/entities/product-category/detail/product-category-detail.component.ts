import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { IProductCategory } from '../product-category.model';

@Component({
  standalone: true,
  selector: 'jhi-product-category-detail',
  templateUrl: './product-category-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class ProductCategoryDetailComponent {
  productCategory = input<IProductCategory | null>(null);

  previousState(): void {
    window.history.back();
  }
}
