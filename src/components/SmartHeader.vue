<template>
	<div class="header_container">
		<a class="logo_box" @click="goHome">
			<span class="logo"></span>
			<span class="projectName">Smart-UI</span>
		</a>

		<div class="menu_container">
			<el-menu router mode="horizontal" ref="smart-menu">
				<el-menu-item v-for="item in items" :key="item.index" :index="item.index">{{item.name}}</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'SmartHeader',

	data () {
		return {
			activeMenu: '',

			items: [
				{
					index: 'components',
					name: '组件'
				},
				{
					index: 'templates',
					name: '模板'
				},
				{
					index: 'gis',
					name: 'GIS'
				},
				{
					index: 'topo',
					name: 'Topo'
				}
			]

		}
	},

	methods: {
		goHome () {
			this.$router.push('/')
			this.$refs['smart-menu'].activeIndex = ''
		}
	}
}
</script>

<style lang="less">
	.header_container{
		height: 60px;
		width: 100%;
		margin:0px auto;
		border-bottom: solid 1px #606266;

		.logo_box{
			height: 60px;
			width: auto;
			display: inline-block;
			float: left;
			margin-left: 20px;
			cursor: pointer;

			.logo {
				width: 32px;
				height: 32px;
				display: inline-block;
				float: left;
				background-image: url('/static/images/logo.png');
				background-size: 100%;
				margin: 14px 5px;
			}

			.projectName {
				display: inline-block;
				height: 60px;
				line-height: 60px;
				font-size: 20px;
				color: #409EFF;
				float: left;
				padding: 0 10px;
			}
		}

		.menu_container {
			height: 50px;
			float: right;
			margin-right: 20px;

			.el-menu-item {
				font-size: 16px;
				color: #FFF;
			}

			.el-menu{
				background-color: transparent;
			}

			.el-menu--horizontal{
				border-bottom: none;
			}

			.el-menu--horizontal>.el-menu-item.is-active{
				color: #409EFF !important;
				background-color: transparent;
			}

			.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover{
				background-color: transparent;
				color: #409EFF;
				border-bottom: 2px solid #409EFF !important;
			}
		}
	}
</style>
