import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizational-role-editor',
  templateUrl: './organizational-role-editor.component.html',
  styleUrls: ['./organizational-role-editor.component.scss']
})
export class OrganizationalRoleEditorComponent implements OnInit {
  availableRoles = [
    {name: '1-کارمند'},
    {name: '2-مشتری'},
    {name: '3-نمایندگی، کارگزاری'},
    {name: '3-تامین کننده'},
  ];
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
