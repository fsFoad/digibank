import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-organizational-role-editor',
  templateUrl: './update-organizational-role-editor.component.html',
  styleUrls: ['./update-organizational-role-editor.component.scss']
})
export class UpdateOrganizationalRoleEditorComponent implements OnInit {
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
