import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
// import MachineList from 'machine-list.vue'

// Vue.component('MachineList',{
//     template: '<form @submit.prevent="onMachinesListClick" class="form"><input type="submit" value="Consulter la liste">',
// });

Vue.use(ToggleButton)
Vue.component('Perco', {
    template: '<li :class="{ active: percolprops.isOn }">{{percolprops.name}}<toggle-button :value="percolprops.isOn" @change="percolprops.isOn = !percolprops.isOn"/></li>',
    props: ['percolprops']
});

new Vue({
  el: '#app',
  render: h => h(App)
})
