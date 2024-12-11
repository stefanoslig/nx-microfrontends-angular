import { inject, Pipe, PipeTransform } from '@angular/core';
import { VALIDATION_ERROR_MESSAGES } from './error-messages';

@Pipe({
  standalone: true,
  name: 'errorMapper',
})
export class ErrorMapperPipe implements PipeTransform {
  private errorMessages = inject(VALIDATION_ERROR_MESSAGES);

  transform(key: string, errValue: any): string {
    if (!this.errorMessages[key]) {
      return '';
    }
    return this.errorMessages[key](errValue);
  }
}
