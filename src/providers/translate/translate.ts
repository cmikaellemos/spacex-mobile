import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslateProvider {

  constructor(
		private translateService: TranslateService
	) { }

	translate(key: string): any {
    return this.translateService.instant(key);
  }
}
