import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-organizational-entity-manager',
  templateUrl: './update-organizational-entity-manager.component.html',
  styleUrls: ['./update-organizational-entity-manager.component.scss']
})
export class UpdateOrganizationalEntityManagerComponent implements OnInit {
  @Input() inputParam
  activeTab = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  nextTab(): void {
    this.activeTab = Math.min(5, this.activeTab + 1);
  }
  prevTab(): void {
    this.activeTab = Math.max(0, this.activeTab - 1);
  }
}
