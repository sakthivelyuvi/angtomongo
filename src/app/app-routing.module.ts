import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetAllComponent } from './get-all/get-all.component';
import { PostComponent } from './post/post.component';
import { DeleteComponent } from './delete/delete.component';
import { GetidComponent } from './getid/getid.component';

const routes: Routes = [
  {path:'',component:GetAllComponent},
  {path:'addnew',component:PostComponent},
  {path:'delete/:id',component:DeleteComponent},
  {path:'getid/:id',component:GetidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
