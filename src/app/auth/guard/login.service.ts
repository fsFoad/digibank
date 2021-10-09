import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    authenticated:boolean=false;
  constructor() { }
}
