describe('Google homepage', () => {
    beforeEach(() => {
      cy.visitGoogle();
    });

    context('all elements should be displayed', () => {
        const assertions = {
          elementSelectors: {
            googleTitle: '#hplogo',
            searchInput: '#lst-ib',
            searchButton: '[name="btnK"]',
            felingLuckyButton: '[name="btnI"]',
            languageSwitcherLatinLink: '#SIvCob',
            keyboardOption: '#gs_ok0',
            microphoneOption: '#gsri_ok0',
            languageInfo: '.b0KoTc',
            advertisementLink: '.Fx4vi',
            jobLink: '.Fx4vi',
            basicDataLink: '.Fx4vi',
            privacyLink: '.Fx4vi',
            conditionsLink: '.Fx4vi',
            configurationLink: '.Fx4vi',
            gmail: '[data-pid="23"]',
            images: '[data-pid="2"]',
            options: '#gbwa',
            accountSignIn: '#gb_70',
          },

          elementNames: {
            googleTitle: 'Google title',
            searchInput: 'Search input',
            searchButton: 'Search button',
            felingLuckyButton: 'Feling lucky button',
            languageSwitcherLatinLink: 'Language switcher Latin link',
            keyboardOption: 'Keyboard option',
            microphoneOption: 'Microphone option',
            languageInfo: 'Language info',
            advertisementLink: 'Advertisement link:',
            jobLink: 'Job link',
            basicDataLink: 'Basic data link',
            privacyLink: 'Privacy link',
            conditionsLink: 'Conditions link',
            configurationLink: 'Configuration link:',
            gmail: 'Gmail link',
            images: 'Images link',
            options: 'Options link',
            infos: 'Infos link',
            accountSignIn: 'Account Sign In link',
          },
        };

        Object.keys(assertions.elementSelectors).forEach(key => {
            it(`${assertions.elementNames[key]} should be displayed`, () => {
              cy.elementIsDisplayed(assertions.elementSelectors[key]);
            });
        });
    });
});
