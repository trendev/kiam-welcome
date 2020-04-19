import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsentService {

  // tslint:disable-next-line: variable-name
  private _keyName = 'kiam-storage-agreement'; // kiam storage agreement

  constructor() { }

  get keyName() {
    return btoa(this._keyName);
  }

  isConsented() {
    return !!localStorage.getItem(this.keyName);
  }

  consent() {
    localStorage.setItem(this.keyName, `${new Date().getTime()}`);
  }
  removeConsent() {
    localStorage.removeItem(this.keyName);
  }
}
