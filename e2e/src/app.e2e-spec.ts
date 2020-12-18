import { AppPage } from './app.po';
import { browser, by,logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login page', () => {
    page.navigateTo();
    //browser.pause();
    expect(page.getTitleText()).toEqual('Personal Budget Manager');
  });
  it("should display button",()=>{
    page.navigateTo();
    page.getbutton().click()
    expect(page.getbutton().getText());
  })


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
