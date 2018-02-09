import { CollectionbrewerPage } from './app.po';

describe('collectionbrewer App', () => {
  let page: CollectionbrewerPage;

  beforeEach(() => {
    page = new CollectionbrewerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
