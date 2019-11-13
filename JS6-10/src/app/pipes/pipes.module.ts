import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPipe,TypePipe } from './all.pipe';//引入新建的模块



@NgModule({
  declarations: [ StatusPipe,TypePipe ],//声明新建的模块
  imports: [
    CommonModule
  ],
  exports:[ StatusPipe,TypePipe ]//暴露新建的模块
})
export class PipesModule { }
