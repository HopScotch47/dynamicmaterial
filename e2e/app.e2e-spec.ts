import { BlaPage } from './app.po';

describe('bla App', () => {
  let page: BlaPage;

  beforeEach(() => {
    page = new BlaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
