chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { schemes: ['https', 'http', 'localhost', 'chrome', 'file'] },
    })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});

chrome.pageAction.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, () => {
    chrome.tabs.executeScript(
      { file: 'main.js' }
    );
  });
});