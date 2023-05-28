<template>
    <VslSection />
    <LeadingBrands />
    <CustomerReviews />
    <ProductOverview />
    <ProductFeatures />
    <CallToAction />
</template>

<script lang="ts">
import VslSection from './VslSection.vue'
import LeadingBrands from './LeadingBrands.vue'
import CustomerReviews from './CustomerReviews.vue'
import ProductOverview from './ProductOverview.vue'
import ProductFeatures from './ProductFeatures.vue'
import CallToAction from './CallToAction.vue'

export default {
  components: { VslSection, LeadingBrands, CustomerReviews, ProductOverview, ProductFeatures, CallToAction },
  setup() {}
}
</script>