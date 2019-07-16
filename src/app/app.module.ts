import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OverlayContainer} from '@angular/cdk/overlay';
import {CustomOverlayContainer} from './core/utils/custom-overlay-container';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelPropagation: true,
    suppressScrollX: true
};

import {SharedModule} from './shared/shared.module';
import {PipesModule} from './core/pipes/pipes.module';
import {routing} from './app.routing';

import {AppSettings} from './app.settings';
import {AppComponent} from './app.component';
import {PagesComponent} from './pages/pages.component';
import {BlankComponent} from './pages/blank/blank.component';
import {NotFoundComponent} from './pages/errors/not-found/not-found.component';
import {ErrorComponent} from './pages/errors/error/error.component';

import {TopInfoContentComponent} from './core/components/top-info-content/top-info-content.component';
import {SidenavComponent} from './core/components/sidenav/sidenav.component';
import {VerticalMenuComponent} from './core/components/menu/vertical-menu/vertical-menu.component';
import {FlagsMenuComponent} from './core/components/flags-menu/flags-menu.component';
import {FavoritesComponent} from './core/components/favorites/favorites.component';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        PerfectScrollbarModule,
        SharedModule,
        PipesModule,
        routing
    ],
    declarations: [
        AppComponent,
        PagesComponent,
        BlankComponent,
        NotFoundComponent,
        ErrorComponent,
        TopInfoContentComponent,
        SidenavComponent,
        VerticalMenuComponent,
        FlagsMenuComponent,
        FavoritesComponent
    ],
    providers: [
        AppSettings,
        {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
        {provide: OverlayContainer, useClass: CustomOverlayContainer}
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
