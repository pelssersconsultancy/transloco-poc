import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'transloco-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'transloco-poc';

  private destroy$ = new Subject<void>();

  constructor(private translocoService: TranslocoService) {
    this.translocoService.events$.pipe(
      tap(console.log),
      tap(_ => console.log(this.translocoService.getTranslation())),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSelectLanguage(lang: string): void {
    this.translocoService.setActiveLang(lang);
  }

}
