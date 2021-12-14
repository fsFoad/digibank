import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board-of-directors-editor',
  templateUrl: './board-of-directors-editor.component.html',
  styleUrls: ['./board-of-directors-editor.component.scss']
})
export class BoardOfDirectorsEditorComponent implements OnInit {
  rows = getSampleRows();
  createRegistrationInfoFlag = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  removeRow(row: RowType): void {
    this.rows = this.rows.filter(x => x !== row);
  }

  createRegistrationInfo() {
    this.createRegistrationInfoFlag = true;
  }

  onClose() {
    this.createRegistrationInfoFlag = false;
  }
}

type RowType = {
  title: string;
  semat: string;
  codeMelli: string;
  hododeEkhtiarat: string;
  codeErjaZinafShakhsi: string;
  startDate: number;
  endDate: number;
};

function getSampleRows(): RowType[] {
  return [
    // {
    //   title: 'ساسان همتی',
    //   semat: 'رئیس هیئت مدیره',
    //   codeMelli: '۰۰۹۲۲۱۴۵۲۳',
    //   hododeEkhtiarat: '',
    //   codeErjaZinafShakhsi: '',
    //   startDate: 13990101,
    //   endDate: 14000101,
    // },
    // {
    //   title: 'هوشنگ مانایی',
    //   semat: 'مدیر عامل',
    //   codeMelli: '0054687644',
    //   hododeEkhtiarat: '',
    //   codeErjaZinafShakhsi: '',
    //   startDate: 13970101,
    //   endDate: 14000501,
    // },
    // {
    //   title: 'منیژه قدیمی',
    //   semat: 'نایب رئیس هیات مدیره',
    //   codeMelli: '0104623640',
    //   hododeEkhtiarat: '',
    //   codeErjaZinafShakhsi: '',
    //   startDate: 13950101,
    //   endDate: 14000301,
    // },
  ];
}

