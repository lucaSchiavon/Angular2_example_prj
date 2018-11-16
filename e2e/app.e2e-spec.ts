import { SecondaAppPage } from './app.po';

describe('seconda-app App', function() {
  let page: SecondaAppPage;

  beforeEach(() => {
    page = new SecondaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
