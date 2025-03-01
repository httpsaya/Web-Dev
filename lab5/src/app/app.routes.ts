import { Routes } from '@angular/router';
import { SportComponent } from './sport/sport.component';
import { ClothesComponent } from './clothes/clothes.component';
import { JewelryComponent } from './jewelry/jewelry.component';
import { TechnoComponent } from './techno/techno.component';

export const routes: Routes = [
    {path: 'sport', component: SportComponent, title: 'Sport and Tourism page'},
    {path: 'jewelry', component: JewelryComponent, title: 'Jewelry page'},
    {path: 'clothes', component: ClothesComponent, title: 'Clothes page'},
    {path: 'techno', component: TechnoComponent, title: 'Technologies page'},
]; 
