import { AnularPage } from './app.po';

describe('angular App', () => {
  let page: AnularPage;

  beforeEach(() => {
    page = new AnularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
