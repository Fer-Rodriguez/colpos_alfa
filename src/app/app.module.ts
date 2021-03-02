import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { FtorreComponent } from './ftorre/ftorre.component';
import { FrComponent } from './fr/fr.component';

import { AlexComponent } from './alex/alex.component';
import { KarenComponent } from './karen/karen.component';
import { DavidComponent } from './david/david.component';
import { ItuComponent } from './itu/itu.component';


import { ChavaComponent } from './chava/chava.component';

import { DaduComponent } from './dadu/dadu.component';

import { DanielMMComponent } from './daniel-mm/daniel-mm.component';

import { VictorManceraComponent } from './victor-mancera/victor-mancera.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    FtorreComponent,
    FrComponent,


    ChavaComponent,

    DaduComponent,

    DanielMMComponent,

    VictorManceraComponent,

    AlexComponent,

    KarenComponent,
    DavidComponent,
    ItuComponent,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
