import { Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [

    { path: '', component: DashbordComponent },
    { path: 'dashbord', component: DashbordComponent },
    { path: 'user', component: UserComponent },
];
