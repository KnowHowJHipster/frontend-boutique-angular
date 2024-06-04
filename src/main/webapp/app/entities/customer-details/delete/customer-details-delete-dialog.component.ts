import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ICustomerDetails } from '../customer-details.model';
import { CustomerDetailsService } from '../service/customer-details.service';

@Component({
  standalone: true,
  templateUrl: './customer-details-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class CustomerDetailsDeleteDialogComponent {
  customerDetails?: ICustomerDetails;

  protected customerDetailsService = inject(CustomerDetailsService);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.customerDetailsService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
