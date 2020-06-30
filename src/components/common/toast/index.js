import Toast from "./toast"

const obj = {}

obj.install = function (vue) {
  /*创建组件构造器*/
  const toastContrustoe = vue.extend(Toast)

  /*以new的方式创建组建构造器*/
  const toast = new toastContrustoe;

  /*将组建手动挂在到某一个元素上*/
  toast.$mount(document.createElement("div"));

  /*toast.$el 对应的就是div*/
  document.body.appendChild(toast.$el)

  vue.prototype.$toast = toast
}

export default obj;
