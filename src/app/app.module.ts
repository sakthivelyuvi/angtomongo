import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllComponent } from './get-all/get-all.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component'
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { GetidComponent } from './getid/getid.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAllComponent,
    PostComponent,
    DeleteComponent,
    GetidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,HttpClientModule,ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
