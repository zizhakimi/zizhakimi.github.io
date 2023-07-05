import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHeart, faMapLocation, faEllipsis, faEnvelopeCircleCheck, faCirclePlay, faCircleStop, faVolumeXmark, faGift, faCopy, faChild, faChildDress } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUser, faInstagram, faHeart, faMapLocation, faEllipsis, faEnvelopeCircleCheck, faCirclePlay, faCircleStop, faVolumeXmark, faGift, faCopy, faChild, faChildDress)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
