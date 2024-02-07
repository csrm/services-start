import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../common/logging.service';
import { AccountsService } from '../common/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
//   providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string} = {name: '', status: ''};
  @Input() id: number = 0;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.onStatusChanged({id: this.id, newStatus: status});
    this.accountsService.statusUpdated.emit(status);
//     this.loggingService.logStatusChange(status);
  }
}
