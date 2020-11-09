<template>
  <div class="about">
    <essential-elements ref="testRef" style="display: none" v-bind:testData="testData" :numberTest.sync="numberTest" :objectTest="objectTest" limsm="true"></essential-elements>
    <slot-test>
      <template slot-scope="props">
        <span>hello from parent</span>
        <span>{{ props.testSlotData }}</span>
      </template>
    </slot-test>
  </div>
</template>
<script>
import EssentialElements from "@/components/EssentialElements"
import SlotTest from "@/components/SlotTest"
export default {
  components: {
    EssentialElements,SlotTest
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
  mounted() {
    console.log(this.$refs.testRef)
  }
}
</script>