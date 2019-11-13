import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import {
    AuthGuard
} from './services/authguard.service';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule'
    },
    {
        path: 'page',
        canActivate: [AuthGuard],
        loadChildren: './modules/page/page.module#PageModule'
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'prefix'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule {}
