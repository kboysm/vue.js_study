<template>
  <div class="about">
    <h1>자식 컴포넌트2 About.vue</h1>
    <h2>{{childName}}</h2>
            <p>{{obj_D}}</p>
  </div>
</template>
<script>
export default {
  props:{childName:String,
  obj_D:Object
}
//props ['부모에게 받은객체'] 로 하거나 
//props:{부모로부터 받은 데이터:데이터타입을 적음}
}
</script>