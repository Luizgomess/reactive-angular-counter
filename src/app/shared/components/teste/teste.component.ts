import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, incrementa } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent {
  constructor(private store: Store<{app: IAppState}>) {}

  incrementa(): void {
    this.store.dispatch(incrementa())
  }
}
