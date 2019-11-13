import {
    Component,
    OnInit
} from '@angular/core';
import {
    ServiceService
} from '../../../services/service.service';
import {
    ActivatedRoute,
    Router
} from '@angular/router';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit {

    public responseData: any = []; //请求到数据后将需要的数据传递给了这个数组

    public loading: boolean; //加载数据时显示圆圈表示加载中
    public totalNum: number; //数据总数，双向绑定
    public sizeNum: number; //每页条数，双向绑定
    public savePage: any; //存储页码

    public PageObj: any; //请求分页的对象
    public dataObj: any = {
        type: "",
        status: ""
    };

    constructor(
        public ser: ServiceService,
        public rou: Router,
        public actRouter: ActivatedRoute
    ) {}

    // 页面加载时就会执行这里面的代码以及函数
    ngOnInit() {
        console.log("初始化函数运行了!")
        this.actRouter.queryParamMap.subscribe((result: any) => {
            console.log(result); //这里的result内包含了从url中获取到的参数
            this.dataObj = Object.assign(this.dataObj, result.params); //深拷贝，
            this.getTable(this.dataObj);
        })
    }

    //   --------------------------请求数据的方法---------------------------
    getTable(params ? ) {
        this.loading = true;
        this.ser.getData(params).subscribe((res: any) => {
            console.log(res);
            this.responseData = res.data.articleList;
            this.totalNum = res.data.total; //page分页
            this.sizeNum = res.data.size; //page分页
            this.loading = false;
        })
    }

    //   --------------------------页码改变的回调方法---------------------------
    change(e) {
        this.PageObj = {
            page: e
        }
        console.log(e)
        let pageChange = Object.assign(this.PageObj, this.dataObj)
        console.log(pageChange)
        this.rou.navigate(['/page/article'], {
            queryParams: pageChange
        })
    }

    //   --------------------------查找数据的方法---------------------------
    searchData() {
        //不知道什么缘故，原本通过就可以获取到搜索时间凌晨的时间戳，现在获取到的还包括可当前实时"小时+分钟"的时间戳
        // let start = this.startDate ? new Date(this.startDate).getTime() : '';这里是将时间的格式进行转换为时间戳格式
        // let end = this.endDate ? new Date(this.endDate).getTime() + 86399999 : ''; // + 86399999后可以搜索同一天
        console.log(this.dataObj);

        this.dataObj.startAt = this.dataObj.startAt ? transform(this.dataObj.startAt) : '';
        this.dataObj.endAt = this.dataObj.endAt ? transform(this.dataObj.endAt) + 86399999 : ''; //能搜索同一天的数据(1天是86400000ms)

        //这里是获取到搜索日期当天凌晨的时间，并转换为时间戳格式(计算1970/1/1到当前搜索时间凌晨的毫秒)
        function transform(dt) {
            if (typeof dt !== 'number') {
                return new Date((dt).getFullYear() + '-' + ((dt).getMonth() + 1) + '-' + (dt).getDate()).valueOf();
            } else {
                return dt
            }
        }

        // 以下进行url传值，将搜索的条件传递到url中，页面初始化的时候获取url请求数据
        this.rou.navigate(['/page/article'], {
            queryParams: this.dataObj
        })

        //请求到数据后减去之前加上的值，如果不减去连续点击搜索时，搜索时间也会累加一天
        if (this.dataObj.endAt) {
            this.dataObj.endAt = this.dataObj.endAt - 86399999;
        }
    }

    //   --------------------------清空数据的方法---------------------------
    clearData() {
        this.dataObj = {
            type: "",
            status: ""
        };
        this.rou.navigate(['/page/article'], {
            queryParams: this.dataObj
        })
    }

    //   --------------------------修改上下线的方法---------------------------
    confirm(id, status) {
        console.log(id, status)
        status = status == 1 ? 2 : 1;
        this.ser.putStatusData({
            id: id,
            status: status
        }).subscribe((res: any) => {
            console.log(res)
            if (res.code == 0) {
                console.log(this.savePage)
                this.getTable(this.savePage)
            }
        })
    }

    //   --------------------------编辑数据的方法---------------------------
    edit(id) {
        console.log(id)
        this.rou.navigate(['/page/detail'], {
            queryParams: {
                id: id
            }
        })
    }

    //   --------------------------删除数据的方法---------------------------   
    delete(id) {
        console.log(id)
        this.ser.deleteData(id).subscribe((res: any) => {
            console.log(res)
            if (res.code == 0) {
                this.getTable(this.savePage)
            }
        })
    }
}
