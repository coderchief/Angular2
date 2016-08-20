import {ListB} from './ListB';
import {ListA} from './ListA';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'ListA', component: ListA },
    { path: 'ListB', component: ListB },
    { path: '', component: ListA }];
export const appRoutingProviders: any[] = [
];
export const routing = RouterModule.forRoot(appRoutes);


