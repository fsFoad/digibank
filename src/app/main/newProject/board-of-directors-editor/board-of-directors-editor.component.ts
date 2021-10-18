import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-of-directors-editor',
  templateUrl: './board-of-directors-editor.component.html',
  styleUrls: ['./board-of-directors-editor.component.scss']
})
export class BoardOfDirectorsEditorComponent implements OnInit {
  rows = getSampleRows();
  constructor() { }

  ngOnInit(): void {
  }

}

type RowType = {
  row: number;
  title: string;
  semat: string;
  codeMelli: string;
  hododeEkhtiarat: string;
  codeErjaZinafShakhsi: string;
  startDate: string;
  endDate: string;
};

function getSampleRows(): RowType[] {
  return [1].map(i => (
    {
      row: i,
      title: 'title' + i,
      semat: 'semat' + i,
      codeMelli: 'codeMelli' + i,
      hododeEkhtiarat: 'ekh' + i,
      codeErjaZinafShakhsi: 'code' + i,
      startDate: 'st' + i,
      endDate: 'en' + i,
    }
  ));
}
