// document 指用户页面的
let body = document.body
let documentClone = document.cloneNode(true)
let article = new Readability(documentClone).parse()
let content = article.content

function clear () {
  body.innerHTML = content
}

chrome.runtime.onMessage.addListener (function(request, sender, sendRequest) {
  console.log(request, "\n", new Date())
  if (request.message === 'action') {
    clear()
  }
})
