import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoListComponent {
  readonly list$: Observable<CryptoModel[]> = this._cryptoService.getAll();
  private _selectedCryptoSubject: Subject<CryptoModel> = new Subject<CryptoModel>();
  public selectedCrypto$: Observable<CryptoModel> = this._selectedCryptoSubject.asObservable();

  constructor(private _cryptoService: CryptoService) {
  }

  selectCrypto(crypto: CryptoModel): void {
    this._selectedCryptoSubject.next(crypto);
  }
}
