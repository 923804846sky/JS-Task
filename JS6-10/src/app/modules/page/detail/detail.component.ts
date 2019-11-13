import {
    Component,
    OnInit
} from '@angular/core';
import {
    UploadFile
} from 'ng-zorro-antd';

import {
    ServiceService
} from '../../../services/service.service'
import {
    Router,
    ActivatedRoute
} from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    public onBtn: boolean = false; //图片锁定的变量
    public offBtn: boolean = false; //图片锁定的变量

    public imgObj: any = {
        type: '3',
        industry: '0'
    }

    //下面是上传图片的ui组件复制过来的，作用不明
    fileList = []; //预览图数组内原数据再ngOnint中
    showUploadList = {
        showPreviewIcon: true,
        showRemoveIcon: true,
        hidePreviewIconInNonImage: true
    };
    previewImage: string | undefined = '';
    previewVisible = false;
    handlePreview = (file: UploadFile) => {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
    };


    constructor(
        public ser: ServiceService,
        public rou: Router,
        public actRouter: ActivatedRoute
    ) {}

    ngOnInit() {
        this.actRouter.queryParamMap.subscribe((res: any) => {
            //不加以下if语句会报错，但是不影响运行，因为在新增数据时也会像修改数据那样去获取url数据
            if (res.params.id != undefined) {
                this.ser.editData(res.params.id).subscribe((result: any) => {
                    console.log(result)
                    var resObj = result.data.article;
                    resObj.type = resObj.type.toString()
                    console.log(typeof (resObj.type))
                    this.imgObj = resObj;
                    this.fileList = [{
                        uid: -1,
                        name: 'xxx.png',
                        status: 'done',
                        url: this.imgObj.img
                    }];
                    console.log(this.imgObj)
                })
            }
        })
    }

    // 上传图片触发的回调函数
    change(e) {
        console.log(e)
        if (e.type == "success") {
            this.imgObj.img = e.file.response.data.url
        }
    }

    //新增数据状态为"上线"的方法
    online() {
        this.onBtn = true; //防止网络差时，连续点击按钮连续向后台发送请求
        let params = JSON.parse(JSON.stringify(this.imgObj)) //深拷贝
        params.status = 2;
        console.log(params);
        if (params.id) {
            //修改数据
            this.ser.putData(params).subscribe((haha: any) => {
                if (haha.code == 0) {
                    this.rou.navigate(['/page/article'])
                } else {
                    this.onBtn = false; //解锁按钮
                }
            })
        } else {
            //新增数据
            this.ser.upload(params).subscribe((res: any) => {
                console.log(res);
                if (res.code == 0) {
                    this.rou.navigate(['/page/article'])
                } else {
                    this.onBtn = false; //解锁按钮
                }
            })
        }
    }

    //新增数据状态为"草稿"的方法
    draft() {
        this.offBtn = true; //防止网络差时，连续点击按钮连续向后台发送请求
        let params = JSON.parse(JSON.stringify(this.imgObj)) //深拷贝
        params.status = 1;
        console.log(params);
        if (params.id) {
            //修改数据
            this.ser.putData(params).subscribe((haha: any) => {
                if (haha.code == 0) {
                    this.rou.navigate(['/page/article'])
                } else {
                    this.offBtn = false; //解锁按钮
                }
            })
        } else {
            //新增数据
            this.ser.upload(params).subscribe((res: any) => {
                console.log(res);
                if (res.code == 0) {
                    this.rou.navigate(['/page/article'])
                } else {
                    this.offBtn = false; //解锁按钮
                }
            })
        }
    }

    goback() {
        console.log(this.imgObj.img)
        window.history.back();
    }
}
