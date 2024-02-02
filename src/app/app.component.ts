import { Component, OnInit } from '@angular/core';
import { AccountsService } from './common/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts : { name: string, status: string }[] = [];

  constructor(private accountsService: AccountsService) {
    this.accounts = this.accountsService.accounts;
  }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  onStatusChanged(updatedData: {id: number, newStatus: string}) {
    this.accountsService.onStatusChanged(updatedData);
  }
}
