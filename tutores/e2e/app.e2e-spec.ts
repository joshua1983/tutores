import { TutoresPage } from './app.po';

describe('tutores App', function() {
  let page: TutoresPage;

  beforeEach(() => {
    page = new TutoresPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
