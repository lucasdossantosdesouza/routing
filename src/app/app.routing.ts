import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTS: Routes = [
    {path: 'cursos', component: CursosComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent}
];

// tslint:disable-next-line:eofline
export const _routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTS);