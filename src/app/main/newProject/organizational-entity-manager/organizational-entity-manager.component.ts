import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DatasetService} from '../../shared/services/dataset.service';

@Component({
  selector: 'app-organizational-entity-manager',
  templateUrl: './organizational-entity-manager.component.html',
  styleUrls: ['./organizational-entity-manager.component.scss']
})
export class OrganizationalEntityManagerComponent implements OnInit {
  @ViewChild('info') infoEditor: any;

  activeTab = 0;

  constructor(private router: Router, private datasetService: DatasetService) { }

  ngOnInit(): void {
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  // ساخت رکورد جدید از فرم اطلاعات سازمانی و افزودن به دیتاست، سپس رفتن به لیست اصلاح
  save(): void {
    const record: any = { customerType: 'حقوقی' };

    const f = this.infoEditor && this.infoEditor.form ? this.infoEditor.form.value : null;
    if (f) {
      record.customerName = f.title;
      record.title = f.title;
      record.enTitle = f.enTitle;
      record.nationalCode = f.nationalCode;
      record.organizationalRole = f.availableRoles;
      record.personalCode = f.organizationalCode;
      record.bank = f.bankNameList;
      record.zinafType = f.organizationalUnit;
      record.statusZinaf = f.statusZinaf;
      record.shahabCode = f.shahabCode;
      record.noMalekiat = f.noMalekiat;
      record.numberSubmit = f.numberSubmit;
      record.numberNewspaperOfficial = f.numberNewspaperOfficial;
      record.areaRegistration = f.areaRegistration;
      record.dateRegistration = f.dateRegistration;
    }

    this.datasetService.load('organizational-entities').then(() => {
      this.datasetService.add('organizational-entities', record);
      this.router.navigate(['/organizationalEntityList']);
    });
  }

  nextTab(): void {
    this.activeTab = Math.min(5, this.activeTab + 1);
  }
  prevTab(): void {
    this.activeTab = Math.max(0, this.activeTab - 1);
  }
}
