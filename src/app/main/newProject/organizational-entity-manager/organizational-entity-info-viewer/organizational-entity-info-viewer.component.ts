import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizational-entity-info-viewer',
  templateUrl: './organizational-entity-info-viewer.component.html',
  styleUrls: ['./organizational-entity-info-viewer.component.scss']
})
export class OrganizationalEntityInfoViewerComponent implements OnInit {
  @Input() isPreview = false;
  constructor() { }

  ngOnInit(): void {
  }

}
