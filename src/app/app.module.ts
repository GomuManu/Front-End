import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablaComponent } from './tabla/tabla.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModalAddUpdateComponent } from './modal-add-update/modal-add-update.component';
import { FormsModule } from '@angular/forms';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { FormatoModelosPipe } from './pipes/formato-modelos.pipe';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TablaComponent,
    PageNotFoundComponent,
    ModalAddUpdateComponent,
    ModalDeleteComponent,
    FormatoModelosPipe,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalAddUpdateComponent, ModalDeleteComponent]
})
export class AppModule { }
