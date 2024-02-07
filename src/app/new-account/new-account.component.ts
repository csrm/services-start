import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../common/logging.service';
import { AccountsService } from '../common/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
//   providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.onAccountAdded({name: accountName, status: accountStatus});
//     this.loggingService.logStatusChange(accountStatus);
  }
}
