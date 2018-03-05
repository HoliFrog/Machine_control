import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'

Vue.use(ToggleButton)
Vue.component('Perco', {
    template: '<li :class="{ active: perco.isOn }">{{perco.name}}<toggle-button :value="perco.isOn" @change="perco.isOn = !perco.isOn"/></li>',
    props: ['perco']
})

new Vue({
  el: '#app',
  render: h => h(App)
})
