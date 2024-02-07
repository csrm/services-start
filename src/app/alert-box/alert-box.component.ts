import { Component } from '@angular/core';
import { AccountsService } from '../common/accounts.service';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent {
  constructor(private accountsService: AccountsService) {
    console.log('In AlertBox Component');
    this.accountsService.statusUpdated.subscribe((status: string) => { console.log("Subscribed to status updates");alert('Status Updated to : '+ status);});
  }
}
