import Toast from './Toast'
const obj = {}

obj.install = function(Vue) {
  console.log(Toast);
  const toastContrustor = Vue.extend(Toast);
  // 创建一个组件对象
  const toast = new toastContrustor()
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast

}

export default obj