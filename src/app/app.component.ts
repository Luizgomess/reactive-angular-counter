import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { decrementa, IAppState, incrementa, reseta } from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<{app: IAppState}>) {}

  counter$ = this.store.select('app').pipe(
    map( pescar => pescar.counter)
  )

  incrementa(): void {
    this.store.dispatch(incrementa())
  }

  decrementa(): void {
    this.store.dispatch(decrementa())
  }

  reseta(): void {
    this.store.dispatch(reseta())
  }
}
