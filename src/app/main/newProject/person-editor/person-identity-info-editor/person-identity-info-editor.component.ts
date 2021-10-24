import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-identity-info-editor',
  templateUrl: './person-identity-info-editor.component.html',
  styleUrls: ['./person-identity-info-editor.component.scss']
})
export class PersonIdentityInfoEditorComponent implements OnInit {
  banks = [
    { name: '-' },
    { name: 'ملت' },
    { name: 'پارسیان' },
    { name: 'زیر عنوان' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
