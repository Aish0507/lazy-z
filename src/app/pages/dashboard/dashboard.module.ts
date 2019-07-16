import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {DashboardComponent} from './dashboard.component';
import {HttpClientModule} from "@angular/common/http";

export const routes = [
    {path: '', component: DashboardComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        FormsModule,
        PerfectScrollbarModule,
        HttpClientModule
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule {
}