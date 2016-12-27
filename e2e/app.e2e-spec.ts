import { AngularWebSitePage } from './app.po';

describe('angular-web-site App', function() {
  let page: AngularWebSitePage;

  beforeEach(() => {
    page = new AngularWebSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
