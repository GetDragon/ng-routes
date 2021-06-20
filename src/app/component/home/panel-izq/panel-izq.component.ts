import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-panel-izq',
  templateUrl: './panel-izq.component.html',
  styleUrls: ['./panel-izq.component.scss']
})
export class PanelIzqComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.navigate(["toc"], { relativeTo: this.route, skipLocationChange: true });
  }

  navegarPanelIzq(segment: string) {
    this.router.navigate([segment], { relativeTo: this.route, skipLocationChange: true });
  }
}
