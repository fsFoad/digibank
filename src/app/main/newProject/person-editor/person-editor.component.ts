import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.scss']
})
export class PersonEditorComponent implements OnInit {
  activeTab = 0;
  constructor() { }

  ngOnInit(): void {
  }

  nextTab(): void {
    this.activeTab = Math.min(6, this.activeTab + 1);
  }
  prevTab(): void {
    this.activeTab = Math.max(0, this.activeTab - 1);
  }
}
