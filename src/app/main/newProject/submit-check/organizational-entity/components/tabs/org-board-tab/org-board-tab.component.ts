import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from '../../../../../shared/constants/Constants';

export interface BoardMember {
  erjaCode: string;
  nationalCode: string;
  title: string;
  erjaCodeZinaf: string;
  nationalCodeAtba: string;
  postType: string;
  LimitsAuthority: string;
  startDate: any;
  endDate: any;
}

/**
 * تبِ «هیئت مدیره و سهامداران».
 * Master-detail: جدولِ اعضا + فرمِ افزودنِ inline (بدون child component جدا).
 */
@Component({
  selector: 'app-org-board-tab',
  templateUrl: './org-board-tab.component.html',
})
export class OrgBoardTabComponent {
  readonly postOrganization = Constants.postOrganization;

  members: BoardMember[] = [];
  showForm = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      erjaCode: [''],
      nationalCode: [''],
      title: [''],
      erjaCodeZinaf: [''],
      nationalCodeAtba: [''],
      postType: [''],
      LimitsAuthority: [''],
      startDate: [''],
      endDate: [''],
    });
  }

  openForm(): void {
    this.form = this.buildForm();
    this.showForm = true;
  }
  cancel(): void {
    this.showForm = false;
  }
  confirm(): void {
    this.members = [...this.members, this.form.value];
    this.showForm = false;
  }
  remove(member: BoardMember): void {
    this.members = this.members.filter(m => m !== member);
  }
}
