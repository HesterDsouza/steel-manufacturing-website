import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// EN - Components
import navbar_en from "./locales/en/components/navbar.json";
import footer_en from "./locales/en/components/footer.json";
import contact_en from "./locales/en/components/contact.json";
import detailsCard_en from "./locales/en/components/detailsCard.json";
import slideshow_en from "./locales/en/components/slideshow.json";

// EN - Layouts
import rootLayout_en from "./locales/en/layouts/rootLayout.json";
import adminLayout_en from "./locales/en/layouts/adminLayout.json";

// EN - Pages
import aboutUsPage_en from "./locales/en/pages/aboutUsPage.json";
import adminLogin_en from "./locales/en/pages/adminLogin.json";
import contactPage_en from "./locales/en/pages/contactPage.json";
import createAdmin_en from "./locales/en/pages/createAdmin.json";
import dashboard_en from "./locales/en/pages/dashboard.json";
import homePage_en from "./locales/en/pages/homePage.json";
import productDetail_en from "./locales/en/pages/productDetail.json";
import productsPage_en from "./locales/en/pages/productsPage.json";
import searchResultsPage_en from "./locales/en/pages/searchResultsPage.json";
import servicesPage_en from "./locales/en/pages/servicesPage.json";
import technologyPage_en from "./locales/en/pages/technologyPage.json";
import userQueries_en from "./locales/en/pages/userQueries.json";

// AR - Components
import navbar_ar from "./locales/ar/components/navbar.json";
import footer_ar from "./locales/ar/components/footer.json";
import contact_ar from "./locales/ar/components/contact.json";
import detailsCard_ar from "./locales/ar/components/detailsCard.json";
import slideshow_ar from "./locales/ar/components/slideshow.json";

// AR - Layouts
import rootLayout_ar from "./locales/ar/layouts/rootLayout.json";
import adminLayout_ar from "./locales/ar/layouts/adminLayout.json";

// AR - Pages
import aboutUsPage_ar from "./locales/ar/pages/aboutUsPage.json";
import adminLogin_ar from "./locales/ar/pages/adminLogin.json";
import contactPage_ar from "./locales/ar/pages/contactPage.json";
import createAdmin_ar from "./locales/ar/pages/createAdmin.json";
import dashboard_ar from "./locales/ar/pages/dashboard.json";
import homePage_ar from "./locales/ar/pages/homePage.json";
import productDetail_ar from "./locales/ar/pages/productDetail.json";
import productsPage_ar from "./locales/ar/pages/productsPage.json";
import searchResultsPage_ar from "./locales/ar/pages/searchResultsPage.json";
import servicesPage_ar from "./locales/ar/pages/servicesPage.json";
import technologyPage_ar from "./locales/ar/pages/technologyPage.json";
import userQueries_ar from "./locales/ar/pages/userQueries.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        components: {
          navbar: navbar_en,
          footer: footer_en,
          contact: contact_en,
          detailsCard: detailsCard_en,
          slideshow: slideshow_en,
        },
        layouts: {
          rootLayout: rootLayout_en,
          adminLayout: adminLayout_en,
        },
        pages: {
          aboutUsPage: aboutUsPage_en,
          adminPage: adminLogin_en,
          contactPage: contactPage_en,
          createAdmin: createAdmin_en,
          dashboard: dashboard_en,
          homePage: homePage_en,
          productDetail: productDetail_en,
          productsPage: productsPage_en,
          searchResultsPage: searchResultsPage_en,
          servicesPage: servicesPage_en,
          technologyPage: technologyPage_en,
          userQueries: userQueries_en,
        },
      },
      ar: {
        components: {
          navbar: navbar_ar,
          footer: footer_ar,
          contact: contact_ar,
          detailsCard: detailsCard_ar,
          slideshow: slideshow_ar,
        },
        layouts: {
          rootLayout: rootLayout_ar,
          adminLayout: adminLayout_ar,
        },
        pages: {
          aboutUsPage: aboutUsPage_ar,
          adminPage: adminLogin_ar,
          contactPage: contactPage_ar,
          createAdmin: createAdmin_ar,
          dashboard: dashboard_ar,
          homePage: homePage_ar,
          productDetail: productDetail_ar,
          productsPage: productsPage_ar,
          searchResultsPage: searchResultsPage_ar,
          servicesPage: servicesPage_ar,
          technologyPage: technologyPage_ar,
          userQueries: userQueries_ar,
        },
      },
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;