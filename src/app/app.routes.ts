import { Routes } from '@angular/router';
import { HomeComponent } from '../../Club-futbol/src/app/components/home/home.component';
import { EquiposComponent } from '../../Club-futbol/src/app/components/equipos/equipos.component';
import { LoginComponent } from '../../Club-futbol/src/app/components/login/login.component';
import { LugarJogoComponent } from '../../Club-futbol/src/app/components/lugar-jogo/lugar-jogo.component';

export const routes: Routes = [
   {
      path: 'equipos',
      component: EquiposComponent,

   },
   {
      path: 'home',
      component: HomeComponent,
   },

   {
      path: 'login',
      component: LoginComponent,
   },
   {
      path: 'lugar-jogo',
      component: LugarJogoComponent,
   }
   
];



