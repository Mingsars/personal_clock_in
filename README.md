# 代码规范
## 文件命名
统一使用下划线分割例如 ** goods_library.js **

# 页面规范
##  页面大小
页面内容统一用类名为 container 的div包裹
container 定义在common.css

# css规范
##  文件命名
使用连字符例如  ** box-item **

## 属性顺序
.main {
  position: absolute; //  定位放在前面
  top: 0;
  left: 0;
  display: flex;  //  盒子模型其次
  width: 500px;
  color: #fff;  //  其他属性最后
}

##  选择器嵌套
嵌套最多不要超过三层
.main .head .title{
  font-size: 20px;
}

##  优先样式
优先使用common.css中已经定义的类名对应的样式

# js规范
##  文件命名
使用连字符例如  ** box-click.js **

## 变量名命名规范
使用驼峰命名法例如  ** boxArr **

## 书写规范
关键字前面加上空格例如
function submit(a, b) {
  for(var i = 0; i < arr.length; i++) {
    if (i < 5) {

    } else if (i > 5 && i < 10) {

    } else {

    }
  }
}