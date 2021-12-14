import { Component, OnInit } from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';

@Component({
  selector: 'app-update-organizational-role-editor',
  templateUrl: './update-organizational-role-editor.component.html',
  styleUrls: ['./update-organizational-role-editor.component.scss']
})
export class UpdateOrganizationalRoleEditorComponent implements OnInit {
  availableRoles=Constants.availableRolespickList;

  selectedRoles = [
    // {name: 'مشتری - ۱۲۱۲۱۲۱۲'},
    // {name: 'کارگزاری رتبه ب - ۱۴۱۵۱۶۱۷'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

interface Role {
  name: string;
}
