<template>
  <div class="about">
    <essential-elements v-bind:testData="testData" :numberTest.sync="numberTest" :objectTest="objectTest" limsm="true"></essential-elements>
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
      numberTest:1,
      objectTest:{
        test_0:'string test',
        test_1:12,
        test_2:''
      }
    }
  },
}
</script>