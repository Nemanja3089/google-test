describe('Google homepage', () => {
    beforeEach(() => {
      cy.visitGoogle();
    });

    const assertions = {
        elementSelectors: {
          searchButton: '[name="btnK"]',
          felingLuckyButton: '[name="btnI"]',
          languageSwitcherLatinLink: '#SIvCob',
          languageSwitcherLatinLink: '#SIvCob',
          languageInfo: '.b0KoTc',
          advertisementLink: '.Fx4vi',
          jobLink: '.Fx4vi',
          basicDataLink: '.Fx4vi',
          privacyLink: '.Fx4vi',
          conditionsLink: '.Fx4vi',
          configurationLink: '.Fx4vi',
          gmail: '[data-pid="23"]',
          images: '[data-pid="2"]',
          accountSignIn: '#gb_70',
        },

        elementText: {
          searchButton: 'Google претрага',
          felingLuckyButton: 'Из прве руке',
          languageSwitcherLatinLink: 'Google се нуди на:',
          languageSwitcherLatinLink: 'srpski',
          languageInfo: 'Србија',
          advertisementLink: 'Оглашавање',
          jobLink: 'За посао',
          basicDataLink: 'Основни подаци',
          privacyLink: 'Приватност',
          conditionsLink: 'Услови',
          configurationLink: 'Подешавања',
          gmail: 'Gmail',
          images: 'Слике',
          accountSignIn: 'Пријавите се',
        },
      };

    Object.keys(assertions.elementSelectors).forEach(key => {
        it(`${assertions.elementText[key]} text should be displayed`, () => {
          cy.verifyText(assertions.elementSelectors[key], assertions.elementText[key])
        });
    });
});
