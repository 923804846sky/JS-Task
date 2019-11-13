import {
    Component,
    OnInit
} from '@angular/core';
import {
    ServiceService
} from '../../services/service.service'
import {
    Router
} from '@angular/router';
@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

    constructor(
        public ser: ServiceService,
        public rou: Router
    ) {}

    ngOnInit() {}

    loginOut(e) {
        e.preventDefault();
        this.ser.cancel().subscribe((res: any) => {
            console.log(res)
            if (res.code == 0) {
                window.sessionStorage.removeItem("auth_token");
                this.rou.navigate(['/login'])
            }
        })
    }

}
