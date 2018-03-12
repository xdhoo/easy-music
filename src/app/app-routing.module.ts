import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DiscoverComponent } from './discover/discover.component';

const routes:Routes = [
    { path: '', redirectTo: '/discover', pathMatch: 'full'},
    { path: 'discover', component:DiscoverComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}