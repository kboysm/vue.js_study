import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import "font-awesome/css/font-awesome.min.css";
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);
Vue.use(Vuetify,{iconfont:'fa'});

export default new Vuetify({
    iconfont:'mdi'
});
