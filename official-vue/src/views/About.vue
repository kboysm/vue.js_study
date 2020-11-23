<template>
  <div class="about">
    <form>
      <input type="text" v-test-directive="{ color: 'black', textColor:'white'}" />
    </form>
    <essential-elements
      ref="testRef"
      style="display: none"
      v-bind:testData="testData"
      :numberTest.sync="numberTest"
      :objectTest="objectTest"
      limsm="true"
    ></essential-elements>
    <slot-test style="display: none;">
      <template v-slot="{testSlotData : vSlotStudyTest}">{{ vSlotStudyTest }}</template>
      <template v-slot="{testSlotDefaultData={testData:'1234'}}">{{ testSlotDefaultData.testData }}</template>
    </slot-test>
    <props-test style="display: none;" :test-props="testProps"></props-test>
    <!--
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
상태를 유지할 수 있고 다시 렌더링하지도 않음.
    -->
    <css-transition-test></css-transition-test>
  </div>
</template>
<script>
import EssentialElements from "@/components/EssentialElements"
import SlotTest from "@/components/SlotTest"
import PropsTest from "@/components/PropsTest"
import CssTransitionTest from "@/components/CssTransitionTest"
export default {
  components: {
    EssentialElements,
    SlotTest,
    PropsTest,
    CssTransitionTest,
  },
  data() {
    return {
      testData: "testtest",
      numberTest: 1,
      objectTest: {
        test_0: "string test",
        test_1: 12,
        test_2: "",
      },
      testProps: "-test",
    }
  },
  mounted() {
    // console.log(this.$refs.testRef)
  },
}
</script>