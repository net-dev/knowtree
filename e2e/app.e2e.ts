import { KnowtreePage } from './app.po';

describe('knowtree App', function() {
  let page: KnowtreePage;

  beforeEach(() => {
    page = new KnowtreePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('knowtree works!');
  });
});
