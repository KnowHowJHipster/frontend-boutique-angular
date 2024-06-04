import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { ICustomerDetails } from '../customer-details.model';

@Component({
  standalone: true,
  selector: 'jhi-customer-details-detail',
  templateUrl: './customer-details-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class CustomerDetailsDetailComponent {
  customerDetails = input<ICustomerDetails | null>(null);

  previousState(): void {
    window.history.back();
  }
}
