import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthorDetailsComponent } from './authors/author-details/author-details.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';


@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        HiComponent,
        AuthorListComponent,
        AuthorDetailsComponent

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
    ]
})
export class AppModule { }
