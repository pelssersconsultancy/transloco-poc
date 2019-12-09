import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {
  TranslocoConfig,
  TranslocoMissingHandler,
  TRANSLOCO_CONFIG,
  TRANSLOCO_MISSING_HANDLER,
  TranslocoModule,
} from '@ngneat/transloco';
import { translocoLoader } from './transloco-loader';
import { HttpClientModule } from '@angular/common/http';


export class CustomTranslocoMissingHandler implements TranslocoMissingHandler {
  handle(_key: string, _config: TranslocoConfig): string {
    return '';
  }
}


@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: 'lazy-feature',
          loadChildren: () =>
            import('@transloco-poc/lazyloaded-feature').then(
              m => m.LazyloadedFeatureModule
            )
        },
        { path: '**', redirectTo: 'lazy-feature/lazy' }
      ],
      {
        initialNavigation: 'enabled',
        preloadingStrategy: PreloadAllModules,
        enableTracing: false
      }
    ),
    TranslocoModule
  ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useFactory: provideTranslocoConfig,
      deps: [],
    },
    {
      provide: TRANSLOCO_MISSING_HANDLER,
      useClass: CustomTranslocoMissingHandler,
    },
    translocoLoader,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function provideTranslocoConfig(): TranslocoConfig {
  return {
    availableLangs: ['en', 'nl'],
    reRenderOnLangChange: true,
    defaultLang: 'en',
    prodMode: false,
    fallbackLang: 'en'
  };
}
