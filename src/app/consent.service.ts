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
    return !!sessionStorage.getItem(this.keyName);
  }

  consent() {
    sessionStorage.setItem(this.keyName, `${new Date().getTime()}`);
  }
  removeConsent() {
    sessionStorage.removeItem(this.keyName);
  }
}
