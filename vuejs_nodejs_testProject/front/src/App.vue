<template>
  <div>
    <img v-if="noSaveImg" :src="noSaveImg" alt="이미지 미리보기" />
    <form>
      <input
        type="file"
        id="ex_file"
        ref="uploadImageFile"
        @change="onFileSelected"
        accept="image/*"
      />
      <input @click="onSave" type="submit" value="저장" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      uploadImageFile: "",
      noSaveImg: ""
    };
  },
  methods: {
    onFileSelected(event) {
      this.uploadImageFile = this.$refs.uploadImageFile.files[0]; //3번
      this.noSaveImg = URL.createObjectURL(this.uploadImageFile); // 이미지 미리보기 구현
    },

    async onSave() {
      const fd = new FormData(); //반드시 필요
      fd.append("upLoadImage", this.uploadImageFile); //4번
      await axios
        .post("http://localhost:3000/api/user/userImage", fd)
        .then(r => {
          console.log(r);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>