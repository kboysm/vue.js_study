<template>
  <div>
    <v-textarea
    outline
    v-model="memo"
    label="to-do-list를 입력해주세요"
    value=""
    >
    </v-textarea>
    <v-btn v-if="mode ==='add'" @click="listAdd">추가하기</v-btn>
    <v-btn v-else @click="listEdit">수정하기</v-btn>
  </div>
</template>

<script>
import {eventBus} from '../main'
export default {
  data(){
    return{
      memo:null,
      index:null,
      mode:'add'
    }
  },
  created() {
    eventBus.$on('listEdit',(memo,index)=>{
      this.memo= memo;
      this.index = index;
      this.mode = 'edit';
      console.log(memo, index);
    })
  },
  methods:{
    listAdd(){
      console.log('리스트 추가')
      if(this.memo ===null){
        alert('할일을 입력해주세요.')
      }else{
      this.$emit('listAdd',this.memo);
      this.memo=null
      }
    },
    listEdit(){
      console.log('리스트 수정')
      if(this.memo ===null){
        alert('할일을 입력해주세요.')
      }else{
      this.$emit('listEdit',this.memo,this.index);
      this.memo=null
      this.mode='add'
      }
    }
  }

}
</script>
