import Vue from "vue";
/**
 * grid components
 */
import Container from "@/components/grid/container.vue";
import Row from "@/components/grid/row.vue";
import Column from "@/components/grid/column.vue";

/**
 * pageType components
 */
import LandingPage from "@/components/pageTypes/landingPage.vue";
import ArticlePage from "@/components/pageTypes/articlePage.vue";
import ProductPage from "@/components/pageTypes/productPage.vue";

/**
 * pagePart components
 */
import HowToStep from "@/components/pageParts/howToStep.vue";
import Hero from "@/components/pageParts/hero.vue";
import Product from "@/components/pageParts/product.vue";
/**
 * base components
 */
import ctaButton from "@/components/base/ctaButton.vue";
import Wsvg from "@/components/base/wswg.vue";
import Markdown from "@/components/base/markdown.vue";

/**
 * comp. instances
 */
Vue.component("landingPage", LandingPage);
Vue.component("articlePage", ArticlePage);
Vue.component("productPage", ProductPage);
Vue.component("howToStep", HowToStep);
Vue.component("container", Container);
Vue.component("row", Row);
Vue.component("column", Column);
Vue.component("hero", Hero);
Vue.component("ctaButton", ctaButton);
Vue.component("product", Product);
Vue.component("wswg", Wsvg);
Vue.component("markdown", Markdown);
