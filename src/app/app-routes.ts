import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  // para recibir un parámetro, ese será el ID del heroe que yo quiero mostrar, ese será el código cuando pase el código por el url
  { path: 'heroe/:id:number', component: HeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APPROUTING = RouterModule.forRoot(APP_ROUTES);
