import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-login h2')).getText() as Promise<string>;

  }

  getbutton()
  {
    return element(by.xpath('//button[@class="w3-button w3-blue w3-round-xxlarge"]'))
  }
}
