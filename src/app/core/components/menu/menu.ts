import {Menu} from './menu.model';

export const verticalMenuItems = [
    new Menu(1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new Menu(2, 'ADP', '/blank', null, 'check_box_outline_blank', null, false, 0),
    new Menu(3, 'DP', '/', null, 'grid_on', null, false, 0),
    new Menu(4, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 0)
];