import articleDesignThatEarnsTrust from "./design-that-earns-trust";
import articleTheHiddenCostOfDesigningWithout from "./the-hidden-cost-of-designing-without-a-clear-product-narrative";
import articleTheImportanceOfAccessibilityInModernDesign from "./the-importance-of-accessibility-in-modern-design";
import articleWhatFounderGetWrongAboutDesign from "./what-founder-get-wrong-about-design";
import articleWhyMostDigitalProductsFail from "./why-most-digital-products-fail"
import articleWhyStartupsConfusePeedWithlCarity from "./why-startups-confuse-peed-with-clarity";
const articles = [
    articleDesignThatEarnsTrust,
    articleWhyMostDigitalProductsFail,
    articleTheHiddenCostOfDesigningWithout,
    articleWhatFounderGetWrongAboutDesign,
    articleWhyStartupsConfusePeedWithlCarity,
    articleTheImportanceOfAccessibilityInModernDesign
];
export default articles;

export const editorials = articles.filter((item) => item.show===true)