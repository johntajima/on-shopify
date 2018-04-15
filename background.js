chrome.webRequest.onHeadersReceived.addListener(function(details) {
    var headers = details.responseHeaders;

    headers.some(function(header, index) {
      if (header.value.toLowerCase().indexOf('shopify') !== -1) {
        chrome.pageAction.show(details.tabId);
        return true
      }
    });
  },
  { urls: ['http://*/*', 'https://*/*'] },
  ['responseHeaders']
);
