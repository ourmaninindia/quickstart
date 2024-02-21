import A11yDialog from 'a11y-dialog';
import * as CookieConsent from './cookieconsent-core-esm.js';

// const consentDialog = createDialog('consent-dialog-container');

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

var cookie = '';

const cc = CookieConsent;

cc.run({
    autoClearCookies: true,
    cookie: {
        name: 'our_cookie',
        expiresAfterDays: 182,
        domain: '',
        path: '/',
        sameSite: 'Lax'
    },
    page_scripts: true,
    force_consent: true,
    guiOptions: {
        consentModal: {
            layout: "cloud", // or bar, box
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {
            enabled: true
        },
        analytics: {
            enabled: true
        }
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "I Care About Your Privacy!",
                    description: "Please accept these settings, reject them, or manage your preferences.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"/policies\">Privacy Policy</a>\n<a href=\"/terms\">Terms and conditions</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Essential cookies are used to ensure its proper operation, and tracking cookies to understand how you interact with it. Tracking will be enabled only upon your explicit consent."
                        },
                        {
                            title: "Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Functionality Cookies",
                            description: "Functionality cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "Analytics cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously. ",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"/contact\">contact me</a>."
                        }
                    ]
                }
            }
        }
    }
});