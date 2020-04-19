import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieConsentComponent } from './cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kiam';
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    const snackBarRef = this.snackBar.openFromComponent(CookieConsentComponent, { data: { title: this.title } });

    snackBarRef.onAction().subscribe(() => {
      console.log('ToS accepted!');
    });

  }

}
