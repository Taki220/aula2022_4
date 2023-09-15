import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'advinhar',
    loadChildren: () => import('./page/advinhar/advinhar.module').then( m => m.AdvinharPageModule)
  },
  {
    path: 'wikiminecraft',
    loadChildren: () => import('./page/wikiminecraft/wikiminecraft.module').then( m => m.WikiminecraftPageModule)
  },
  {
    path: 'livre1',
    loadChildren: () => import('./page/livre1/livre1.module').then( m => m.Livre1PageModule)
  },
  {
    path: 'livre2',
    loadChildren: () => import('./page/livre2/livre2.module').then( m => m.Livre2PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
