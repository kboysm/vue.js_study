# vue3

## vue2와 vue3 차이
루트요소가 한개만 있어야한다 - vue2 , 루트 요소가 여러개 존재 가능하다 - vue3

## 반응형 데이터
```
let name = 'limsm'
let age = 55

const handleClick = () => {
    name = 'abcd'
    age = 22
}
    --변하지 않음--

const name = ref('limsm')
const age = ref(35)

const handleClick = () => {
    name.value = 'abcd'
    age.value = 22
}
변함 
```
반응형 - ref

## ref , reactive

ref : primitive type을 가변 참조 객체로 만들고 , 내부 값을 가리키는 단일 속성 value가 있다.

reactive : 객체를 반응형으로 만든다. 객체를 사용하는 경우 reactive를 사용하면 되지만 , 반환된 객체에 대한 참조유지를 위해 객체를 해제하거나 펼치는 경우 toRefs()를 사용한다.

## watch , watchEffect

watchEffect : 여러 반응 속성을 보고 싶고 이전 값을 신경 쓰지 않을 때
watch : 특정 반응 속성을 보고 싶을 때 이전 값이 필요할 때

watch 중지하는 법

```
const stopWatchEffect = watchEffect(() => {
      console.log('watchEffect function ran' , search.value)
    })
    const matchingNames = computed(()=> {
      return names.value.filter( name => name.includes( search.value ))
    })
    const handleClick = () => {
      stopWatch()
      stopWatchEffect()
    }
```