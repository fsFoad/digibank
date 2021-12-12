import { Component, OnInit } from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';

@Component({
  selector: 'app-organizational-role-editor',
  templateUrl: './organizational-role-editor.component.html',
  styleUrls: ['./organizational-role-editor.component.scss']
})
export class OrganizationalRoleEditorComponent implements OnInit {
  availableRoles=Constants.availableRoles;
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
