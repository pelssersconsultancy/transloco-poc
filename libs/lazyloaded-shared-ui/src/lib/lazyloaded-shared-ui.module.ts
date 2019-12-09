import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { LazyButtonComponent } from './lazy-button/lazy-button.component';

const scopeLoader = (importer: any, root = 'i18n') =>
   ['en', 'nl'].reduce((acc: any, lang: string) => {
    acc[lang] = () => importer(lang, root);

    return acc;
  }, {});

@NgModule({
  declarations: [LazyButtonComponent],
  imports: [CommonModule, TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: { scope: 'sharedUi', loader: scopeLoader((lang: any, root: string) => import(`./${root}/${lang}.json`)) }
    }
  ],
  exports: [LazyButtonComponent]
})
export class LazyloadedSharedUiModule {}
