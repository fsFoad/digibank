import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DatasetService} from '../../shared/services/dataset.service';

@Component({
  selector: 'app-update-personal',
  templateUrl: './update-personal.component.html',
  styleUrls: ['./update-personal.component.scss']
})
export class UpdatePersonalComponent implements OnInit {
  @Input() inputParam;
  @Output() close = new EventEmitter<string>();

  @ViewChild('identity') identityEditor: any;
  @ViewChild('contact') contactEditor: any;
  @ViewChild('supp') suppEditor: any;

  activeTab = 0;

  constructor(private router: Router, private datasetService: DatasetService) { }

  ngOnInit(): void {
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  // جمع‌کردن دیتای فرم‌ها، نگاشت به شکل ردیف جدول و ذخیره در دیتاست
  save(): void {
    const id = this.inputParam && this.inputParam.id;
    const changes: any = { ...this.inputParam };

    const idf = this.identityEditor && this.identityEditor.form ? this.identityEditor.form.value : null;
    if (idf) {
      changes.firstName = idf.firstName;
      changes.lastName = idf.lastName;
      changes.customerName = ((idf.firstName || '') + ' ' + (idf.lastName || '')).trim();
      changes.fatherName = idf.fatherName;
      changes.nationalCode = idf.nationalCode;
      changes.organizationalRole = idf.organizationalRole;
      changes.personalCode = idf.personeliCode;
      changes.banck = idf.bankId;
      changes.numberShenasname = idf.shenasnameNumber;
      changes.dateShenasname = idf.shenasnameIssueDate;
      changes.seriShenasname = idf.shenasnameSeriesLetter;
      changes.addadShenasname = idf.shenasnameSeriesNumber;
      changes.seryalShenasname = idf.shenasnameSerial;
      changes.seryalkartMeli = idf.cartMelliSerial;
      changes.shenasnameType = idf.shenasnameTypeId;
      changes.city = idf.shenasnameIssueCityId;
      changes.codeHoze = idf.shenasnameHozeCodeId;
      changes.genderType = idf.genderId;
      changes.birthDate = idf.birthDate;
      changes.country = idf.birthCountryId;
      changes.religion = idf.religionId;
      changes.sect = idf.faithId;
      changes.residence = idf.eghamatStatusId;
      changes.enName = idf.firstNameLatin;
      changes.enLastName = idf.lastNameLatin;
      changes.enFatherName = idf.enFatherName;
    }

    if (id !== undefined && id !== null) {
      this.datasetService.update('personal-entities', id, changes);
    }
    this.close.emit('close');
  }

  nextTab(): void {
    this.activeTab = Math.min(6, this.activeTab + 1);
  }
  prevTab(): void {
    this.activeTab = Math.max(0, this.activeTab - 1);
  }
}
