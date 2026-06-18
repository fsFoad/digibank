import { Component, OnInit } from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';

@Component({
  selector: 'app-party-signature-editor',
  templateUrl: './party-signature-editor.component.html',
  styleUrls: ['./party-signature-editor.component.scss']
})
export class PartySignatureEditorComponent implements OnInit {
  signType=Constants.signType;
  constructor() { }

  ngOnInit(): void {
  }

}
