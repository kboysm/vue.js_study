<template>
  <div>
    props test<br>
    {{testProps}}
  </div>
</template>
<script>
// props: {
//   title: String,
//       likes: Number,
//       isPublished: Boolean,
//       commentIds: Array,
//       author: Object,
//       callback: Function,
//       contactsPromise: Promise // or any other constructor
// }
export default {
  name:'props-test',
  props:['testProps']
}
</script>