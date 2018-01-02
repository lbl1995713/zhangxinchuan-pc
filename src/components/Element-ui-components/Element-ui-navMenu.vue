<template>
	<div style="height: 100%;">
		<el-menu 
		default-active="1-4-1" 
		class="el-menu-vertical-demo navList"
		:collapse="isCollapse">

		  <el-submenu 
		  v-for="(nav,index) in navList"
		  v-if="nav.children"
		  :key="nav.title"
		  :index="index + ''">
		  	<template slot="title">
		      <i :class="nav.icon"></i>
		      <span 
		      slot="title"
		      v-text="nav.title"></span>
		    </template>
		    <el-menu-item-group>
		    	<el-menu-item 
		    	v-for="(child,_index) in nav.children"
		    	v-if="!child.children"
		    	v-text="child.title"
		    	:key="child.title"
		    	:index="index + '-' + _index"
		    	@click="jump(nav.link + '/' + child.link)"></el-menu-item>

		    	<el-submenu
		    	v-else
		    	:index="index + '-' + _index">
		    		 <span slot="title"
		    		 v-text="child.title"></span>
		    		 <el-menu-item
		    		 v-for="grandson,__index in child.children"
		    		 :key="grandson.title"
		    		 v-text="grandson.title" 
		    		 :index="index + '-' + _index + '-' + __index"
		    		 @click="jump(nav.link + '/' + child.link + '/' + grandson.link)"></el-menu-item>
		    	</el-submenu>
		    </el-menu-item-group>
		  </el-submenu>

		  <el-menu-item 
		  v-else 
		  :index="index + 1 + ''"
		  @click="jump(nav.link)">
		    <i :class="nav.icon"></i>
		    <span slot="title"
		    v-text="nav.title"></span>
		  </el-menu-item>

		  <!-- 缩进按钮 -->
		  <div class="trapezoid"
		  @click="isCollapse = !isCollapse">
				<span
				v-if="!isCollapse" 
				class="expand triangle"></span>
				<span 
				v-if="isCollapse"
				class="hidden triangle"></span>
	      </div>
		</el-menu>


	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				 isCollapse: false,
				 navList: [
					 {
					 	title: '导航一',
					 	icon: 'el-icon-location',
					 	link: '',
					 	children: [
							{
								title: '选项一',
								icon: '',
								link: '',
							},
							{
								title: '选项二',
								icon: '',
								link: '',
							},
							{
								title: '选项三',
								icon: '',
								link: '',
							},
							{
								title: '选项四',
								icon: '',
								link: '',
								children: [
									{
										title: '三级一',
										icon: '',
										link: '',
									}
								]
							}
					 	]
					 },
					 {
					 	title: '导航二',
					 	icon: 'el-icon-menu',
					 	link: 'tableTest',
					 },
					 {
					 	title: '导航三',
					 	icon: 'el-icon-setting',
					 	link: 'test',
					 }
				 ]
			}
		},
		methods:{
		    jump(url){
		    	if(url && !url.startsWith('/'))
			    	this.$router.push({path: url})
		    }
		}
	}
</script>

<style type="text/css" scoped>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
	    width: 200px;
	    min-height: 400px;
	 }

	 .navList{
	 	height:100%;
	 	position:relative
	 }

	 /*梯形样式*/
	 .trapezoid{
	 	width:50px;
	    height:24px;
	    margin: 50px 0;
	    text-align:center;
	    color:#000;
	    line-height:25px;
	    background-color:#f1f1f1;
	    position:absolute;
	    right: -37px;
	    top:  38%;
	    transform:  rotate(90deg);
	    cursor: pointer;
	 }
	 .trapezoid:before{
	    content:'';
	    display:block;
	    width:35px;
	    height:24px;
	    position:absolute;
	    transform:skewX(-30deg);
	    background:#f1f1f1;
	    border-top-left-radius:5px;
	    left:-20px;
	    top:0;
	}
	.trapezoid:after{
	    content:'';
	    display:block;
	    width:35px;
	    height:24px;
	    position:absolute;
	    transform:skewX(30deg);
	    background:#f1f1f1;
	    border-top-right-radius:5px;
	    top:0;
	    right:-20px;
	}

	/*三角形样式*/
	.triangle{
		display: block;
		width: 0;
        height: 0;
        border: 7px solid transparent;
	}
	.expand{
		margin: 10px auto;
		border-top-color: #fff;
	}
	.hidden{
		margin: 0px auto;
		border-bottom-color: #fff;
	}
</style>