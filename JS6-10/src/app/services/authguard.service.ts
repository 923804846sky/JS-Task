import {
    Injectable
} from '@angular/core';
import {
    CanActivate,
    Router
} from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(public router: Router) {}

    canActivate() {

        const token = window.sessionStorage.getItem('auth_token');
        if (!token) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
