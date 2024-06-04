import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IUser } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/service/user.service';
import { Gender } from 'app/entities/enumerations/gender.model';
import { CustomerDetailsService } from '../service/customer-details.service';
import { ICustomerDetails } from '../customer-details.model';
import { CustomerDetailsFormService, CustomerDetailsFormGroup } from './customer-details-form.service';

@Component({
  standalone: true,
  selector: 'jhi-customer-details-update',
  templateUrl: './customer-details-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class CustomerDetailsUpdateComponent implements OnInit {
  isSaving = false;
  customerDetails: ICustomerDetails | null = null;
  genderValues = Object.keys(Gender);

  usersSharedCollection: IUser[] = [];

  protected customerDetailsService = inject(CustomerDetailsService);
  protected customerDetailsFormService = inject(CustomerDetailsFormService);
  protected userService = inject(UserService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: CustomerDetailsFormGroup = this.customerDetailsFormService.createCustomerDetailsFormGroup();

  compareUser = (o1: IUser | null, o2: IUser | null): boolean => this.userService.compareUser(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ customerDetails }) => {
      this.customerDetails = customerDetails;
      if (customerDetails) {
        this.updateForm(customerDetails);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const customerDetails = this.customerDetailsFormService.getCustomerDetails(this.editForm);
    if (customerDetails.id !== null) {
      this.subscribeToSaveResponse(this.customerDetailsService.update(customerDetails));
    } else {
      this.subscribeToSaveResponse(this.customerDetailsService.create(customerDetails));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICustomerDetails>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(customerDetails: ICustomerDetails): void {
    this.customerDetails = customerDetails;
    this.customerDetailsFormService.resetForm(this.editForm, customerDetails);

    this.usersSharedCollection = this.userService.addUserToCollectionIfMissing<IUser>(this.usersSharedCollection, customerDetails.user);
  }

  protected loadRelationshipsOptions(): void {
    this.userService
      .query()
      .pipe(map((res: HttpResponse<IUser[]>) => res.body ?? []))
      .pipe(map((users: IUser[]) => this.userService.addUserToCollectionIfMissing<IUser>(users, this.customerDetails?.user)))
      .subscribe((users: IUser[]) => (this.usersSharedCollection = users));
  }
}
