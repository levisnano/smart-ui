<template>
	<div class="info_container">
		<div class="title">Smart 工具团队 UI组件库</div>
		<div class="sub_title">一套基于vue2.0的前端组件库</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'Info'
}
</script>

<style lang="less">
	.info_container{
		width: 100%;
		height: 500px;
		padding-top: 1px;

		.title{
			height: 60px;
			line-height: 60px;
			font-size: 30px;
			margin: 100px auto 10px;
			color: #FFF;
		}

		.sub_title{
			height: 40px;
			line-height: 40px;
			font-size: 20px;
			color: #999;
			font-weight: lighter;
		}
	}
</style>
