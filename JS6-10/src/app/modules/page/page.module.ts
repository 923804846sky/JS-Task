import { NgModule } from '@angular/core';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { ArticleComponent } from './article/article.component';
import { NgZorroAntdModule,NzTableModule,NzDatePickerModule, NzButtonModule, NzSelectModule, NzUploadModule, NzPopconfirmModule, NzFormModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';//使用NgFor和NgIf需要引入
import { PipesModule } from '../../pipes/pipes.module';//引用自定义管道
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';//使用NgModule需要引用




@NgModule({
  imports: [PageRoutingModule,NgZorroAntdModule,NzTableModule,CommonModule,PipesModule,NzDatePickerModule,FormsModule,NzButtonModule,NzSelectModule,NzUploadModule,NzPopconfirmModule,NzFormModule],
  declarations: [PageComponent, ArticleComponent, DetailComponent],
  exports: [PageComponent]
})
export class PageModule { }
