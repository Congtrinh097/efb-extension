console.log('This is the background page.');
chrome.runtime.onInstalled.addListener((details) => {
  console.log(details);
 
  chrome.contextMenus.create({
    title: "English for Beginners",
    id: "contextMenuMain",
    contexts: [ "page", "selection"]
  })

  chrome.contextMenus.create({
    title: "Translate Selected",
    id: "translateSelectedText",
    parentId: "contextMenuMain",
    contexts: ["selection"]
  })

  chrome.contextMenus.create({
    title: "Add to Learning List",
    id: "addToLearningList",
    parentId: "contextMenuMain",
    contexts: [ "selection"]
  })

  chrome.contextMenus.create({
    title: "Read Selected Text",
    id: "readSelectedText",
    parentId: "contextMenuMain",
    contexts: [ "selection"]
  })

});

chrome.contextMenus.onClicked.addListener((event) => { 
  console.log(event);
  if(event.menuItemId === 'translateSelectedText') {
    chrome.tabs.create({
      url: `http://translate.google.com.vn/?hl=vi&sl=en&tl=vi&text=${event.selectionText}&op=translate`})
  }
  if(event.menuItemId === 'readSelectedText') {
    chrome.tts.speak(event.selectionText, {'lang': 'en-US', 'rate': 1.5});
  }
  if(event.menuItemId === 'addToLearningList') {
   // Add to learning list
  }
});