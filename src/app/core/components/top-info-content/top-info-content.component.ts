import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-top-info-content',
    templateUrl: './top-info-content.component.html',
    styleUrls: ['./top-info-content.component.scss']
})
export class TopInfoContentComponent implements OnInit {
    @Input('showInfoContent') showInfoContent: boolean = false;
    @Output() onCloseInfoContent: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    public closeInfoContent(event) {
        this.onCloseInfoContent.emit(event);
    }

}
