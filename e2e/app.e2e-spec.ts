import { HcxAppPage } from './app.po';

describe('hcx-app App', () => {
  let page: HcxAppPage;

  beforeEach(() => {
    page = new HcxAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
