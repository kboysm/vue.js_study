<template>
  <div class="about">
    <essential-elements v-bind:testData="testData"></essential-elements>
  </div>
</template>
<script>
import EssentialElements from "@/components/EssentialElements"
export default {
  components: {
    EssentialElements,
  },
  data() {
    return {
      testData: "testtest",
    }
  },
}
</script>