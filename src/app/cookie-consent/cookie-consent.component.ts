import { environment } from '@env/environment';
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss']
})
export class CookieConsentComponent {

  title = 'nom_application';
  tos: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, public snackBarRef: MatSnackBarRef<CookieConsentComponent>) {
    this.title = data.title;
    this.tos = environment.tos;
  }

  accept() {
    this.snackBarRef.dismissWithAction();
  }

}
