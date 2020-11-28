import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 /*{
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },
  */
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },

  
  {
    path: 'login',
    loadChildren: () => import('./usu/login/login.module').then( m => m.LoginPageModule)
  },


  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'google',
    loadChildren: () => import('./google/google.module').then( m => m.GooglePageModule)
  },
  /*
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  */
  
  

  {
    path:'',
    loadChildren: () => import('./usu/login/login.module').then( m => m.LoginPageModule)
  },

  
  
 
  
  {
    path: 'inserir',
    loadChildren: () => import('./usu/inserir/inserir.module').then( m => m.InserirPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
function newFunction(): string {
  return './tabs/tabs.module';
}

