import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationPipe} from './pagination/pagination.pipe';
import { UserSearchPipe } from './search/user-search.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';

@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [
        PaginationPipe,
        UserSearchPipe,
        TruncatePipe,
    ],
    exports: [
        PaginationPipe,
        UserSearchPipe,
        TruncatePipe,
    ]
})
export class PipesModule { }
