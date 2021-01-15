import Vue from 'vue'
import Main from './main.vue'

let instance
const MessageConstructor = Vue.extend(Main)
// const instances = []
// const seed = 1

const Message = function (options) {
  if (Vue.prototype.$isServer) return
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  instance = new MessageConstructor({
    data: options
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
}
export default Message
