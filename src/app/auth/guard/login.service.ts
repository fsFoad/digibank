import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authenticated: boolean = false;
  constructor() {
    this.authenticated = isDevMode();
  }
}
