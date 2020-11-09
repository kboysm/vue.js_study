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
      computed setter 테스트 : {{fullName}}
      <br />
      <button @click.once="eventTestMethod('eventTest',$event)">eventTest</button>
      <br />2020-11-09 회사에서는 컴포넌트 DOM 템플릿부터 공부하기 <br>
      부모 컴포넌트에서 숫자로 넘기면 숫자로 문자로 넘기면 문자로 받는다 : {{typeof numberTest }}
      <br>object를 넘기지 않으면 default로 적용한 내용이 화면에 출력 , 그러나 object를 넘기고 object의 data field를 넘기지 않는 경우 default함수가 작동하지 않는다.
      <br> 즉 {}같은 빈 객체를 넘길 경우이다.{{objectTest}}
      <br> 부모 컴포넌트에서 넘긴 데이터.sync를 붙여서 보냈을 경우 하위컴포넌트에서 this.$emit으로 update:변수명 이벤트를 보내면 부모컴포넌트에서 on으로 받지 않아도 됌
      <br>{{numberTest}}
    </div>
  </div>
</template>
<script>
export default {
  name: "essential-elements",
  // props: ["testData","numberTest"],
  props:{
    testData:{
      type:String,
      required:true
    },
    numberTest:{
      type:Number,
      validator:  value=>
       value > 0
    },
    objectTest:{
      type:Object,
      default: ()=> {
        return{
          test_0:'default',
          test_1:100,
          test_2:'default real test'
        }
      }
    }
  },
  data() {
    return {
      testData2: "test",
      testTrig: 2,
    }
  },
  methods: {
    eventTestMethod(el, event) {
      alert(el)
    },
  },
  mounted() {
    if (this.testTrig === 0) this.fullName = "limsangmin"
    else if (this.testTrig === 1) this.fullName = "yayaya"
    else this.fullName = "default Value"
    this.$emit('update:numberTest', 10) //default는 1이였으나 10으로 변경하라는 요청
    /*
    사용자의 요청으로 기본값과 가끔 발생하는 기본값 아주 특수한 경우에 발생하는 기본값을 나눠서 설정 할 수 있을거 같음
    */
  },
  computed: {
    defaultComputed() {
      return this.testData ? this.testData.split("").reverse().join("") : "dd"
    },
    fullName: {
      // getter
      get: function () {
        return this.testData2
      },
      // setter
      set: function (newValue) {
        this.testData2 = newValue
      },
    },
  },
}
</script>