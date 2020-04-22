import { ConsentService } from './consent.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieConsentComponent } from './cookie-consent/cookie-consent.component';
import { environment } from '@env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kiam';
  tos: string;

  constructor(private snackBar: MatSnackBar, private consentService: ConsentService) {
  }

  ngOnInit() {

    this.tos = environment.tos;

    if (!this.consentService.isConsented()) {
      const snackBarRef = this.snackBar.openFromComponent(CookieConsentComponent, { data: { title: this.title } });

      snackBarRef.onAction().subscribe(() => {
        this.consentService.consent();
      });
    }

  }

}
