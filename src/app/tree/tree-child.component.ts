import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { MenuItem } from '../menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-tree-child',
  templateUrl: './tree-child.component.html',
  styleUrls: ['./tree-child.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200)),
      transition('down <=> up', animate(200)),
    ]),
  ],
})
export class TreeChildComponent implements OnInit {
  @Input() node: MenuItem;
  @Input() level: number;
  @Input() idx? = 0;
  @Input() tree: MenuItem;

  url: string;
  currentLevel: number;
  showChildren: boolean = false;
  displayName: string;
  productsLink: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentLevel = this.level + 1;
    this.url = `products/${this.node.id}`;
    this.productsLink = this.getNodeLink();
    this.displayName =
      this.node.name.charAt(0) + this.node.name.substring(1).toLowerCase();
  }

  handleShow(): void {
    this.showChildren = !this.showChildren;
  }

  navigateWithState(): void {
    this.router.navigateByUrl(this.url, { state: this.node });
  }

  getNodeLink(): string {
    let nodeLink = this.node.links.find((link) => link.rel === 'products');
    return nodeLink.href;
  }

  isInChildren(menuOpt: any, menuId: string): boolean {
    if (!menuOpt.children) {
      return false;
    }
    let found = false;
    menuOpt.children.forEach((opt) => {
      const currentState = opt.active;
      opt.active = this.isInChildren(opt, menuId);
      if (opt.id === menuId) {
        found = true;
        opt.active = !currentState;
      }
    });
    return found;
  }
}
