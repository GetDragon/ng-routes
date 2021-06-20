import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
    children: [
      { path: "toc", loadChildren: () => import("./panel-izq/toc/toc.module").then(m => m.TocModule) },
      { path: "lawart", loadChildren: () => import("./panel-izq/law-art/law-art.module").then(m => m.LawArtModule) },
      { path: "indextheme", loadChildren: () => import("./panel-izq/index-theme/index-theme.module").then(m => m.IndexThemeModule) },
      { path: "reltoc", loadChildren: () => import("./panel-izq/rel-toc/rel-toc.module").then(m => m.RelTocModule) },
      { path: "fav", loadChildren: () => import("./panel-der/favorite/favorite.module").then(m => m.FavoriteModule), outlet: "rightPanel" },
      { path: "notes", loadChildren: () => import("./panel-der/notes/notes.module").then(m => m.NotesModule), outlet: "rightPanel" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
