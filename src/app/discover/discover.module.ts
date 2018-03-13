import { NgModule } from '@angular/core';
import { DiscoverRoutingModule } from './discover-routing.module';
import { RecoDetailComponent } from './recommend/reco-detail/reco-detail.component';
import { SMenuComponent } from '../main/s-menu/s-menu.component';

@NgModule({
    imports: [
        DiscoverRoutingModule
    ],
    declarations: [
        RecoDetailComponent,
        SMenuComponent
    ],
})

export class DiscoverModule {}