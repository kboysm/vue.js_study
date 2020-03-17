<template>
  <div id="app">
    
    <file-pond
      name="test"
      ref="pond"
      class-name="my-pond"
      allow-multiple="true"
      accepted-file-types="image/jpeg, image/png"
      v-bind:files="myFiles"
      :server="server"
      v-on:init="handleFilePondInit"
      @processgile="onload"
      />
    
  </div>
</template>

<script>
// Import FilePond
import vueFilePond from 'vue-filepond';

// Import plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';

// Import styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Create FilePond component
const FilePond = vueFilePond( FilePondPluginFileValidateType, FilePondPluginImagePreview );

export default {
    name: 'app',
    data: function() {
        return { 
            myFiles: [],
            server: {
                    url: `${this.$apiRootPath}user`,
                }
            };
    },
    methods: {
    handleFilePondInit () {
      console.log('FilePond has initialized')
      // FilePond instance methods are available on `this.$refs.pond`
    },
    onload (e, r) {
        if(e) return console.error(e.message)
      console.log(r)
    }
  },
    components: {
        FilePond
    }
};
</script>