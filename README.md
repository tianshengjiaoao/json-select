### ajax交互式select组件

一个请求json并展示至前端的select小组件，使用简单、美观。



### 使用说明



##### 1、引入css文件和js文件

```html
<link rel="stylesheet" href="./main.css">
<script src="./js/jquery-3.3.1.min.js"></script>
<script src="./js/main.js"></script>
```



##### 2、DOM结构

```html
<div class="select" id="a">
	<div class="select_selected">select</div>
	<div class="select_content">
		<div class="loading_box">
			<div class="loading">
				<div class="loading_path rotate1"></div>
				<div class="loading_path rotate2"></div>
				<div class="loading_path rotate3"></div>
				<div class="loading_path rotate4"></div>
				<div class="loading_path rotate5"></div>
				<div class="loading_path rotate6"></div>
				<div class="loading_path rotate7"></div>
				<div class="loading_path rotate8"></div>
				<div class="loading_path rotate9"></div>
				<div class="loading_path rotate10"></div>
				<div class="loading_path rotate11"></div>
				<div class="loading_path rotate12"></div>
			</div>
		</div>
		<ul class="select_list">
		</ul>
	</div>
</div>
```



##### 3、配置js

```html
<script>
    var a = new getJson($("#a"),"./json/demo.json")
</script>
```



##### 配置说明：

- ""内输入id和json地址