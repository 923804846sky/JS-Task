import {
    Component,
    OnInit
} from '@angular/core';
import {
    ServiceService
} from '../../services/service.service';
import {
    Router
} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    // 以下aaa对象是要在post请求中用到的
    public account: any = {
        name: '',
        pwd: ''
    }

    // 引入了service和router模块，要在下方构造函数内初始化才能使用
    constructor(
        public ser: ServiceService,
        public rou: Router
    ) {}

    ngOnInit() {}

    login() {
        this.ser.postData(this.account).subscribe((res: any) => {
            console.log(res)
            if (res.code == 0) {
                window.sessionStorage.setItem('auth_token', this.account.name);
                this.rou.navigate(['/page']);
            } else {
                document.getElementById("addText").innerHTML = res.message;
            }
        })
    }
}
