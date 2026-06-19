import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatasetService } from '../../shared/services/dataset.service';

@Component({
  selector: 'app-person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.scss']
})
export class PersonEditorComponent implements OnInit {
  @ViewChild('identity') identityEditor: any;

  activeTab = 0;

  constructor(private router: Router, private datasetService: DatasetService) { }

  ngOnInit(): void {
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  // ساخت رکورد جدید از فرم هویتی و افزودن به دیتاست، سپس رفتن به لیست اصلاح
  save(): void {
    const record: any = { customerType: 'حقیقی' };

    const f = this.identityEditor && this.identityEditor.form ? this.identityEditor.form.value : null;
    if (f) {
      record.firstName = f.firstName;
      record.lastName = f.lastName;
      record.customerName = ((f.firstName || '') + ' ' + (f.lastName || '')).trim();
      record.fatherName = f.fatherName;
      record.nationalCode = f.nationalCode;
      record.organizationalRole = f.organizationalRole;
      record.personalCode = f.personeliCode;
      record.banck = f.bankId;
      record.numberShenasname = f.shenasnameNumber;
      record.dateShenasname = f.shenasnameIssueDate;
      record.seriShenasname = f.shenasnameSeriesLetter;
      record.addadShenasname = f.shenasnameSeriesNumber;
      record.seryalShenasname = f.shenasnameSerial;
      record.seryalkartMeli = f.cartMelliSerial;
      record.shenasnameType = f.shenasnameTypeId;
      record.city = f.shenasnameIssueCityId;
      record.codeHoze = f.shenasnameHozeCodeId;
      record.genderType = f.genderId;
      record.birthDate = f.birthDate;
      record.country = f.birthCountryId;
      record.religion = f.religionId;
      record.sect = f.faithId;
      record.residence = f.eghamatStatusId;
      record.enName = f.firstNameLatin;
      record.enLastName = f.lastNameLatin;
      record.enFatherName = f.enFatherName;
    }

    this.datasetService.load('personal-entities').then(() => {
      this.datasetService.add('personal-entities', record);
      this.router.navigate(['/personalEntityList']);
    });
  }

  nextTab(): void {
    this.activeTab = Math.min(6, this.activeTab + 1);
  }
  prevTab(): void {
    this.activeTab = Math.max(0, this.activeTab - 1);
  }
}
