import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthorDetailsComponent } from './authors/author-details/author-details.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TabComponent } from './tab/tab.component';
import { TaskComponent } from './task/task.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        HiComponent,
        AuthorListComponent,
        AuthorDetailsComponent,
        ToggleComponent,
        TabComponent,
        TaskComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        DragDropModule,
    ]
})
export class AppModule { }
