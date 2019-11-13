import { Pipe, PipeTransform } from '@angular/core';
import { status,type} from './all.constant'

@Pipe({
  name: 'status'//这是管道名字
})
export class StatusPipe implements PipeTransform { //pipes.module模块中引入的是class后面的名字

  transform(value: any, ...args: any[]): any {
    return status.list1[value];
    //这里return 返回status对象里面的list1对象的key值
    //如果这里的value，也就是对象里的value不是数字类型，比如是字符串，那么这里就可以使用 . 而不是 []
  }
}
// --------------------------分割线------------------------------
@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return type.list2[value];
  }
}

