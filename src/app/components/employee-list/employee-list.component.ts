import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  readonly list$: Observable<UserModel[]> = this._userService.getAll();
  private _selectedUserIdSubject: Subject<number> = new Subject<number>();
  public selectedUserId$: Observable<number> = this._selectedUserIdSubject.asObservable();
  readonly userDetails$: Observable<UserModel> = this.selectedUserId$.pipe(
    switchMap(id => this._userService.getOne(id))
  );

  constructor(private _userService: UserService) {
  }

  selectUser(id: number): void {
    this._selectedUserIdSubject.next(id);
  }
}
