import { BbiPage } from './app.po';

describe('bbi App', () => {
  let page: BbiPage;

  beforeEach(() => {
    page = new BbiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
