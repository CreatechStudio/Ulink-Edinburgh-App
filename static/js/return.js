
var backButtonPressCount = 0;
plus.key.addEventListener('backbutton', function() {
  var webView = plus.webview.currentWebview();
   var Navback = document.getElementsByClassName('Navigation-back').length;
  if (Navback>0) {
	webView.back();
  } else if (backButtonPressCount === 0) {
    backButtonPressCount++;
    plus.nativeUI.toast('再次点击返回键退出应用');
    setTimeout(function() {
      backButtonPressCount = 0;
    }, 2000);
  } else if (backButtonPressCount === 1) {
    backButtonPressCount++;
    plus.runtime.quit();
  }
});


	
