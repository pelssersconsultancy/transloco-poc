import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { LazyloadedSharedUiModule } from '@transloco-poc/lazyloaded-shared-ui';

import { LazyComponent } from './lazy/lazy.component';



const scopeLoader = (importer: any, root = 'i18n') =>
   ['en', 'nl'].reduce((acc: any, lang: string) => {
    acc[lang] = () => importer(lang, root);

    return acc;
  }, {});



@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    LazyloadedSharedUiModule,
    RouterModule.forChild([
      {path: 'lazy', component: LazyComponent}
    ])
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: { scope: 'lazyScope', loader: scopeLoader((lang: any, root: string) => import(`./${root}/${lang}.json`)) }
    }
  ]
})
export class LazyloadedFeatureModule {}
