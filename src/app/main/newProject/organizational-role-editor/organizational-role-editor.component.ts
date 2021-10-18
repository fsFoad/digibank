import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizational-role-editor',
  templateUrl: './organizational-role-editor.component.html',
  styleUrls: ['./organizational-role-editor.component.scss']
})
export class OrganizationalRoleEditorComponent implements OnInit {
  availableRoles = [
    {name: 'کارمند - ۱'},
    {name: 'کارگزاری رتبه الف - ۲'},
  ];
  selectedRoles = [
    {name: 'مشتری - ۱۲۱۲۱۲۱۲'},
    {name: 'کارگزاری رتبه ب - ۱۴۱۵۱۶۱۷'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

interface Role {
  name: string;
}
