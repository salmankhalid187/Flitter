import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth-guard.service';

import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component'; 
import { PostsListComponent } from './views/posts-list/posts-list.component'

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent   /* As Login page is publicly accessible and default path */
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],   /* Using Auth guard service to block direct access to dashboard page */
        component: DashboardComponent
    },
    {
        path: 'users/:id',      
        component: PostsListComponent   /* Blog page for each user */
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);