import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
// import { FormErrorsStore } from '../forms-errors.store';

@Component({
  standalone: true,
  selector: 'mfa-list-errors',
  templateUrl: './list-errors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListErrorsComponent implements OnDestroy {
  // protected readonly formErrorsStore = inject(FormErrorsStore);

  ngOnDestroy() {
    // this.formErrorsStore.setErrors({});
  }
}
