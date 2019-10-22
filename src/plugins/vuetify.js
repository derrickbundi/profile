import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        primary: '#9652ff',
        success: '#3cd1c2',
        info: '#ffaa2c',
        error: '#f83e70'
    }
});