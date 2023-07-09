import Header from './Header.vue'
import Footer from './Footer.vue'
import VslSection from './section/VslSection.vue'
import CallToAction from './section/CallToAction.vue'
import CustomerReviews from './section/CustomerReviews.vue'
import LeadingBrands from './section/LeadingBrands.vue'
import ProductFeatures from './section/ProductFeatures.vue'
import ProductOverview from './section/ProductOverview.vue'


export default function install(app) {
  app.component('l-header', Header)
  app.component('l-footer', Footer)
  app.component('s-vsl-section', VslSection)
  app.component('s-call-to-action', CallToAction)
  app.component('s-customer-reviews', CustomerReviews)
  app.component('s-leading-brands', LeadingBrands)
  app.component('s-product-features', ProductFeatures)
  app.component('s-product-overview', ProductOverview)
  
}