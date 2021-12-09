import {Component, Input, OnInit} from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';

@Component({
  selector: 'app-update-party-signature-editor',
  templateUrl: './update-party-signature-editor.component.html',
  styleUrls: ['./update-party-signature-editor.component.scss']
})
export class UpdatePartySignatureEditorComponent implements OnInit {
  signType=Constants.signType;
  constructor() { }

  ngOnInit(): void {
  }

}
