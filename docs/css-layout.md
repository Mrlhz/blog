# 网页 布局

- [Flex 布局](#Flex布局)
- [Grid 网格布局](#Grid网格布局)

### 参考

- [Web 开发技术 flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
- [Flex 布局示例](http://static.vgee.cn/static/index.html)
- [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [CSS Grid 网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
- [网格布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
- [网格布局的基本概念](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [16种方法实现水平居中垂直居中](https://juejin.im/post/58f818bbb123db006233ab2a)

## Flex布局

>Flex 布局以后，子元素的float、clear和vertical-align属性将失效


### 容器的属性
- `flex-direction`属性决定主轴的方向（即项目的排列方向）
- `flex-wrap`属性定义，如果一条轴线排不下，如何换行
- `flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`
- `justify-content`属性定义了项目在主轴上的对齐方式
- `align-items`属性定义项目在交叉轴上如何对齐
- `align-content`属性定义了多根轴线（多行）的对齐方式。如果项目只有一根轴线，该属性不起作用

### 项目的属性

- `order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0
- `flex-grow`属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
- `flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
- `flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小
- `flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为0 1 auto。后两个属性可选
- `align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为auto，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

### flex-direction属性

row	| row-reverse	| column	| column-reverse
---|---|---|---
水平方向(起点在左) →	| 水平方向 ←	| 垂直方向 ↓	| 垂直方向 ↑

### flex-wrap属性

nowrap	|wrap	|wrap-reverse
---|---|---
不换行	|换行 ↓	|换行 ↑

## justify-content属性

flex-start	|flex-end	|center	|space-between	|space-around
---|---|---|---|---
左对齐	|右对齐	|居中	|两端对齐，项目之间的间隔都相等	|每个项目两侧的间隔相等

### align-items属性

属性	| 描述
---|---
flex-start	|交叉轴的起点对齐
flex-end	| 交叉轴的终点对齐
center	|交叉轴的中点对齐
baseline	|项目的第一行文字的基线对齐
stretch	|如果项目未设置高度或设为auto，将占满整个容器的高度

### align-content属性
属性|描述
---|---
flex-start	| 与交叉轴的起点对齐
flex-end	| 与交叉轴的终点对齐
center	| 与交叉轴的中点对齐
space-between	| 与交叉轴两端对齐，轴线之间的间隔平均分布
space-around	| 每根轴线两侧的间隔都相等。轴线之间的间隔比轴线与边框的间隔大一倍
stretch（默认值）	| 轴线占满整个交叉轴
### align-self属性
- align-self

属性	|描述
---|---
auto	|设置为父元素的 align-items 值，如果该元素没有父元素的话，就设置为 stretch
flex-start	|元素会对齐到 cross-axis 的首端
flex-end	|元素会对齐到 cross-axis 的尾端
center	|元素会对齐到 cross-axis 的中间，如果该元素的 cross-size 的尺寸大于 flex 容器，将在两个方向均等溢出
baseline	|所有的 flex 元素会沿着基线对齐
stretch	|元素将会基于容器的宽和高，按照自身 margin box 的 cross-size 拉伸

除了auto，其他都与align-items属性完全一致


## Grid网格布局

> 注意，设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将**失效**。

### 基本概念

- 容器和项目

>采用网格布局的区域，称为"容器"（`container`）。容器内部采用网格定位的子元素，称为"项目"（`item`）。

- 行和列

>容器里面的水平区域称为"行"（`row`），垂直区域称为"列"（`column`）。

- 单元格

>行和列的交叉区域，称为"单元格"（`cell`）。正常情况下，`n`行和`m`列会产生`n * m`个单元格

- 网格线

>划分网格的线，称为"网格线"（`grid line`）。水平网格线划分出行，垂直网格线划分出列。正常情况下，`n`行有`n + 1`根水平网格线，`m`列有`m + 1`根垂直网格线，比如三行就有四根水平网格线。

### 容器属性

- `display` 属性
- `grid-template-columns` 属性，`grid-template-rows` 属性
  - repeat()
  - auto-fill 关键字
  - fr 关键字
  - minmax()
  - auto 关键字
  - 网格线的名称

>`grid-template-columns`属性定义每一列的列宽，`grid-template-rows`属性定义每一行的行高。

```css
/* repeat()接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。 */

/* 定义了6列，第1，4列的宽度为100px，第2，5列为20px，第3，6列为80px*/
grid-template-columns: repeat(2, 100px 20px 80px);

```

### 项目属性

- grid-column-start
- grid-column-end
- grid-row-start
- grid-row-end

```css
.item-1 {
  background-color: #ef342a;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 4; /* */
}
```

<html>
<!--  -->
<style>
.wrap{display:grid;grid-template-rows:100px 100px;grid-template-columns:100px 100px 100px 100px;}.item{font-size:64px;text-align:center;}.item-1{background-color:#ef342a;grid-column-start:2;grid-column-end:4;grid-row-start:1;grid-row-end:3;}.item-2{background-color:#f68f26;}.item-3{background-color:#4ba946;}.item-4{background-color:#0376c2;}.item-5{background-color:#c077af;}
  </style>
  <div class="wrap">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
  </div>
</html>

---


<html>
<style>
#container{display:grid;grid-template-columns:100px 100px 100px;grid-template-rows:100px 100px 100px;grid-template-areas:'a b c'
                     'd e f'
                     'g h i';}.item{font-size:4em;text-align:center;border:1px solid #e5e4e9;}#container .item-1{background-color:#ef342a;grid-area:e;}.item-2{background-color:#f68f26;}.item-3{background-color:#4ba946;}.item-4{background-color:#0376c2;}.item-5{background-color:#c077af;}.item-6{background-color:#f8d29d;}.item-7{background-color:#b5a87f;}.item-8{background-color:#d0e4a9;}.item-9{background-color:#4dc7ec;}
</style>
<div id="container">
  <div class="item item-1">1</div>
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
  <div class="item item-4">4</div>
  <div class="item item-5">5</div>
  <div class="item item-6">6</div>
  <div class="item item-7">7</div>
  <div class="item item-8">8</div>
  <div class="item item-9">9</div>
</div>
</html>

- `grid-column`: `grid-column-start`和`grid-column-end`的合并简写形式
- `grid-row`: `grid-row-start`属性和`grid-row-end`的合并简写形式
