import {Component, OnInit} from '@angular/core';
import {MenuService} from '../menu/menu.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

    public menuItems;
    public favorites;

    constructor(public menuService: MenuService) {
    }

    ngOnInit() {
        this.menuItems = this.menuService.getVerticalMenuItems().filter(menu => menu.routerLink != null || menu.href != null);
    }

}
