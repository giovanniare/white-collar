import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        data: { title: "White Collar - Express" },
    },
    {
        path: "confirmacion",
        component: HomeComponent,
        data: { title: "Servicio confirmado" },
    },
];
