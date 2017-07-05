import { Component } from '@angular/core';


@Component({
    selector:'page-not-founc',
    template:`
        <div align='center'>
            <a routerLink="/">
                <img [src]="LOGO" />
            </a>
        </div>
    `
})

export class PageNotFoundComponent{
    private LOGO = require('./img/notfound.jpg');
}