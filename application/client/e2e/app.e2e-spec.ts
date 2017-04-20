import { HomePage } from './app.po';

describe('Honu App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('Should have title Honu', () => {
    page.navigateTo();
    expect(page.getHeaderTag().getTagName()).toBe('a');
  });

  it('Should have 4 button', () => {
    let promise= page.getButtons();
    promise.then(function(buttons){
      expect(buttons[0].getText()).toBe('Mock Interview');
      expect(buttons[1].getText()).toBe('Resume & Cover Letter');
      expect(buttons[2].getText()).toBe('Career Advice');
      expect(buttons[3].getText()).toBe('Coach & Mentor');
    });
   
  });

  it('Go to Signin page', () => {
    let promise= page.getButtons();
    promise.then(function(buttons){
      buttons[0].click();
        expect(page.getCurrentUrl()).toEqual('http://localhost:49152/#/signon');
    });
   
  });

});
