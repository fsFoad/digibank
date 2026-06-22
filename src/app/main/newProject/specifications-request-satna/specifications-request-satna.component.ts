import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService } from "primeng/api";
import { SatnaRow } from '../card-board-satna/card-board-satna.component';
import { DatasetService } from '../../shared/services/dataset.service';

interface SatnaApprover {
  id: number;
  fullName: string;
  verificationType: string;
  verificationStatus: string;
  history: number;
  des: string;
}

interface SatnaApproverRelation {
  satnaId: number;
  approverId: number;
}

@Component({
  selector: 'app-specifications-request-satna',
  templateUrl: './specifications-request-satna.component.html',
  styleUrls: ['./specifications-request-satna.component.scss'],
  providers: [ConfirmationService]
})
export class SpecificationsRequestSatnaComponent implements OnInit {
  allApprovers: SatnaApprover[] = [];
  satnaToApproverRelations: SatnaApproverRelation[] = [];
  approversList: SatnaApprover[];
  @Output() close = new EventEmitter<string>();

  _satnaRow: SatnaRow | null = null;
  @Input() get satnaRow(): SatnaRow | null {
    return this._satnaRow;
  };
  set satnaRow(value: SatnaRow) {
    this._satnaRow = value;
    this.refreshApproversList();
  }

  constructor(
    private confirmationService: ConfirmationService,
    private datasetService: DatasetService,
  ) {
  }

  ngOnInit(): void {
    Promise.all([
      this.datasetService.loadRaw('satna-approvers', []),
      this.datasetService.loadRaw('satna-approver-relations', []),
    ]).then(([approvers, relations]: [SatnaApprover[], SatnaApproverRelation[]]) => {
      this.allApprovers = approvers;
      this.satnaToApproverRelations = relations;
      this.refreshApproversList();
    });
  }

  private refreshApproversList(): void {
    if (!this._satnaRow) {
      return;
    }
    this.approversList = this.satnaToApproverRelations
      .filter(x => x.satnaId == this._satnaRow.id)
      .map(x => this.allApprovers.find(a => a.id == x.approverId));
  }

  onClose() {
    this.close.emit('close');
  }
  
  confirm() {
    const message = "مطابق ابلاغیه بانک مرکزی نحوه محاسبه کارمزد ساتنا 0.02 درصد حواله با حداقل کارمزد 30،000 ریال و حداکثر کارمزد 250،000 ریال می باشد که با تایید نهایی از حساب مبدا برداشت خواهد شد.";
    this.confirmationService.confirm({
      message,
      accept: () => this.onClose()
    });
  }
}
