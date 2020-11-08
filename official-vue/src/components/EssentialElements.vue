<template>
  <div>
    <h2>디렉티브</h2>
    <div>
      디렉티브는 v-접두사가 있는 툭수 속성
      <br />단일 javascript 표현식( v-for 제외)
      <br />역할은 표현식의 값이 변경될 때 사이드 이펙트를 반응적으로 DOM에 적용하는 것
    </div>
    <div>
      <h2>computed속성 vs watch속성</h2>Vue는 Vue 인스턴스의 데이터 변경을 관창하고 이에 반응하는 보다 일반적인
      <span style="font-weight:bold;">watch 속성</span>
      을 제공합니다
      <br />watch는 데이터를 지정하고 그 데이터가 바뀌면 이런 함수를 실행하라는 방식으로 소프트웨어 공학에서 이야기하는 '명령형 프로그래밍'방식
      <br />computed 속성은 계산해야 하는 목표 데이터를 정의하는 방식으로 소프트웨어 공학에서 이야기하는 '선언형 프로그래밍 방식'
      <br />
      {{fullName}}
    </div>
  </div>
</template>
<script>
export default {
  name: "essential-elements",
  props: ["testData"],
  data() {
    return {
      firstName: "Foo",
      lastName: "Bar",
    }
  },
  mounted() {
    this.fullName = "limsangmin"
  },
  computed: {
    defaultComputed() {
      return this.testData ? this.testData.split("").reverse().join("") : "dd"
    },
    fullName: {
      // getter
      get: function () {
        return this.firstName + " " + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(" ")
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      },
    },
  },
}
</script>