import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss']
})
export class CookieConsentComponent {

  title = 'nom_application';

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.title = data.title;
  }

}
