<template>
	<div class="components_container">
		<el-row>
			<el-col :span="4">
				<el-menu>
					<el-menu-item-group v-for="group in data">
	
						<template slot="title">
							<i style="font-size: 12px; margin-right: 10px;" class="el-icon-menu"></i>
							<span style="font-size: 16px;">{{group.groupName}}</span>
						</template>

						<el-menu-item v-for="item in group.items" :index="item.index">{{item.name}}</el-menu-item>
						
					</el-menu-item-group>
				</el-menu>
			</el-col>

			<el-col :span="20">
				<!-- <router-view></router-view> -->
			</el-col>
		</el-row>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'Components',

	data () {
		return {
			data: [
				{
					groupName: '基础组件',

					index: 'basic-components',

					items: [
						{
							name: '按钮',
							index: 'smart-button'
						},
						{
							name: '输入框',
							index: 'smart-input'
						},
						{
							name: '下拉框',
							index: 'smart-select'
						},
						{
							name: '单选框',
							index: 'smart-radio'
						},
						{
							name: '复选框',
							index: 'smart-checkbox'
						},
						{
							name: '开关',
							index: 'smart-switch'
						},
						{
							name: '标签',
							index: 'smart-tag'
						}
					]
				},
				{
					groupName: '消息提示',

					index: 'message-components',

					items: [
						{
							name: '加载中',
							index: 'smart-loading'
						},
						{
							name: '提示信息',
							index: 'smart-message'
						},
						{
							name: '通知信息',
							index: 'smart-notification'
						}
					]
				},
				{
					groupName: '表格',

					index: 'table-components',

					items: [
						{
							name: '表格',
							index: 'smart-table'
						}
					]
				},
				{
					groupName: 'Tabs',

					index: 'tabs-components',

					items: [
						{
							name: 'Tabs',
							index: 'smart-tabs'
						}
					]
				}
			]
		}
	}
}
</script>

<style lang="less">
	.components_container{
		width: 100%;
		height: calc(100% - 62px);
		padding-top: 1px;
		background-color: #fff;

		.el-menu-item-group__title{
			text-align: left;
		}

		.el-menu-item{
			text-align: left;
			text-indent: 20px;
		}
	}
</style>
