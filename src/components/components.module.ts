import { NgModule } from '@angular/core';
import { CardLancamentoComponent } from './card-lancamento/card-lancamento';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
@NgModule({
	declarations: [CardLancamentoComponent],
	imports: [],
	exports: [CardLancamentoComponent],
	schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
