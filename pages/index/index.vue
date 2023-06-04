<script>
	export default {
		data() {
			return {
				url:'https://edinburgh.ucsslo.cn',
			}
		},
		onLoad() {
			var currentWebview = this.$scope.$getAppWebview(); 
			var home = plus.webview.create(this.url,'edinburgh',{
				top: uni.getSystemInfoSync().statusBarHeight,
				'uni-app': 'none',
				bottom: '0px',
				cachemode:'default'//防止服务器上更新导致页面异常
			});
			//添加自定义脚本
			home.appendJsFile('static/js/return.js');
			currentWebview.append(home);
			
		}
	}
</script>

