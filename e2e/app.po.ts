export class KnowtreePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('knowtree-app h1')).getText();
  }
}
