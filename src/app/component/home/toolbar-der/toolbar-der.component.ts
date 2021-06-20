import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-der',
  templateUrl: './toolbar-der.component.html',
  styleUrls: ['./toolbar-der.component.scss']
})
export class ToolbarDerComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  navegarPanelDer(segment: string) {
    this.router.navigate([{ outlets: { rightPanel: [segment] } }], { relativeTo: this.route.parent, skipLocationChange: true });
  }

}
