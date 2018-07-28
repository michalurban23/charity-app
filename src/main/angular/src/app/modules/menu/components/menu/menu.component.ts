import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router) { }

  createSurvey() {
    this.router.navigateByUrl('/survey;new');
  }

  fillSurvey() {
    this.router.navigateByUrl('/choose');
  }
}
