import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-organizational-entity-manager',
  templateUrl: './organizational-entity-manager.component.html',
  styleUrls: ['./organizational-entity-manager.component.scss']
})
export class OrganizationalEntityManagerComponent implements OnInit {
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
