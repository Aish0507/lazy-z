import {Injectable} from '@angular/core';
import {Settings} from './models/app.settings.model';

@Injectable()
export class AppSettings {
    public settings = new Settings(
        'STEER',
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        'vertical',
        'default',
        'blue-dark',
        false
    )
}

