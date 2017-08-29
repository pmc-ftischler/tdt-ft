import { TdtFtPage } from './app.po';

describe('tdt-ft App', () => {
  let page: TdtFtPage;

  beforeEach(() => {
    page = new TdtFtPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
