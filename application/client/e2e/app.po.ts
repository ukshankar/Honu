import { browser, element, by } from 'protractor';

export class HomePage {
  constructor(){
      by.addLocator('formControlName', function(value, opt_parentElement, opt_rootSelector) {
        var using = opt_parentElement || document;
        return using.querySelectorAll('[formControlName="' + value +'"]');
      });
  }
  navigateTo() {

    return browser.get('/');
  }

  getHeaderTag() {
    return element(by.linkText('HONU'));
  }

  getButtons() {
    return element.all(by.tagName('button'));
  }

  getCurrentUrl(){
    return browser.getCurrentUrl();
  }


}
