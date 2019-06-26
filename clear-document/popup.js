// document指插件的document
let btn = document.getElementsByClassName("btn")[0]
btn.addEventListener("click", function () {
  chrome.tabs.query({active: true}, function (tabs) {  
    chrome.tabs.sendMessage(tabs[0].id, {message:"action", "id": tabs[0].id}, function (response) {
      // 当前页面需要先点击再触发 bug: https://www.v2ex.com/t/64337
    })  
  })
})