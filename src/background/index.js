console.log('background is running')

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'COUNT') {
    console.log('background has received a message from popup, and count is ', request?.count)
  }
})


chrome.action.onClicked.addListener((event) => {
  //https://developer.chrome.com/docs/extensions/reference/api/action?hl=zh-cn#event-onClicked
  //点击操作图标时触发。如果操作具有弹出式窗口，则不会触发此事件。
  chrome.tabs.create({
    //https://developer.chrome.com/docs/extensions/reference/api/tabs?hl=zh-cn
    url: "options.html"
  });
})