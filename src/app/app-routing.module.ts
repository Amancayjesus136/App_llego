import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'evento/:id',
    loadChildren: () => import('./evento/evento.module').then( m => m.EventoPageModule)
  },
  {
    path: 'amigo',
    loadChildren: () => import('./amigo/amigo.module').then( m => m.AmigoPageModule)
  },
  {
    path: 'registrarevento',
    loadChildren: () => import('./registrarevento/registrarevento.module').then( m => m.RegistrareventoPageModule)
  },
  {
    path: 'registraramigo',
    loadChildren: () => import('./registraramigo/registraramigo.module').then( m => m.RegistraramigoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
