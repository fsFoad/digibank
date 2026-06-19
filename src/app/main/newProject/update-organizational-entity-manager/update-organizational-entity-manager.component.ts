import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DatasetService} from '../../shared/services/dataset.service';

@Component({
  selector: 'app-update-organizational-entity-manager',
  templateUrl: './update-organizational-entity-manager.component.html',
  styleUrls: ['./update-organizational-entity-manager.component.scss']
})
export class UpdateOrganizationalEntityManagerComponent implements OnInit {
  @Input() inputParam;
  @Output() close = new EventEmitter<string>();

  @ViewChild('info') infoEditor: any;

  activeTab = 0;

  constructor(private router: Router, private datasetService: DatasetService) { }

  ngOnInit(): void {
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  // جمع‌کردن دیتای فرم اطلاعات سازمانی، نگاشت به شکل ردیف جدول و ذخیره در دیتاست
  save(): void {
    const id = this.inputParam && this.inputParam.id;
    const changes: any = { ...this.inputParam };

    const f = this.infoEditor && this.infoEditor.form ? this.infoEditor.form.value : null;
    if (f) {
      changes.nationalCode = f.nationalCode;
      changes.organizationalRole = f.availableRoles;
      changes.personalCode = f.organizationalCode;
      changes.bank = f.bankNameList;
      changes.zinafType = f.organizationalUnit;
      changes.statusZinaf = f.statusZinaf;
      changes.shahabCode = f.shahabCode;
      changes.noMalekiat = f.noMalekiat;
      changes.title = f.title;
      changes.enTitle = f.enTitle;
      changes.numberSubmit = f.numberSubmit;
      changes.numberNewspaperOfficial = f.numberNewspaperOfficial;
      changes.areaRegistration = f.areaRegistration;
      changes.dateRegistration = f.dateRegistration;
    }

    if (id !== undefined && id !== null) {
      this.datasetService.update('organizational-entities', id, changes);
    }
    this.close.emit('close');
  }

  nextTab(): void {
    this.activeTab = Math.min(5, this.activeTab + 1);
  }
  prevTab(): void {
    this.activeTab = Math.max(0, this.activeTab - 1);
  }
}
