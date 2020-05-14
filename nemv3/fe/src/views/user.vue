<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-card-title>회원 정보 수정</v-card-title>
          <v-card-text>
            <img-upload />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import imgUpload from "@/components/imgUpload"

export default {
  components: { imgUpload },
  data: () => ({
    form: {
      name: "sss"
    },
    src:
      "data:image/png;base64,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"
  }),
  mounted() {},
  methods: {
    upload() {
      const fd = new FormData()

      fd.append("name", this.form.name)
      fd.append("bin", document.getElementById("bin").files[0])
      this.$axios
        .post("/user", fd)
        .then(({ data }) => {
          this.src = data
          this.$store.commit("pop", {
            msg: "파일 업로드 완료",
            color: "success"
          })
        })
        .catch(e => {
          if (!e.response)
            this.$store.commit("pop", { msg: e.message, color: "warning" })
        })
    }
  }
}
</script>