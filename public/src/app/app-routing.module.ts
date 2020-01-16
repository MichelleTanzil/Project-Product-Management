import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { EditComponent } from "./product/edit/edit.component";
import { NewComponent } from "./product/new/new.component";
import { AllComponent } from "./product/all/all.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  {
    path: "products",
    component: ProductComponent,
    children: [
      {path: "all", component: AllComponent},
      { path: "new", component: NewComponent },
      { path: "edit/:id", component: EditComponent }
    ]
  },
  { path: "**", component: PagenotfoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
