browser.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "get-bookmarks") {
    browser.bookmarks.search("WebCMS4", function(w4node) {
      browser.bookmarks.getSubTree(w4node[0]["id"], function(w4tree) {
        flatennedBookmarks = [];
        bookmarks = w4tree[0]["children"];
        for (let i = 0; i < bookmarks.length; i++) {
          bookmark = bookmarks[i];
          flatennedBookmarks.push({title : bookmark.title, url : bookmark.url});
        }
        sendResponse(flatennedBookmarks);
      });
    });
    return true;
  }
});
