const Counter1 = {
    data() {
      return {
        counter: 0
      }
    },
mounted() {
  setInterval(() => {
    this.counter++
  }, 1000)
}
  }
  
  Vue.createApp(Counter1).mount('#counter1');

const AttributeBinding1 = {
    data() {
      return {
        message: 'Пользователь здесь уже c ' +new Date().toLocaleString() + ' секунд!'
      }
    }
  }
  
  Vue.createApp(AttributeBinding1).mount('#bind-attribute');

  const AttributeBinding2 = {
    data() {
      return {
        message: 'Пользователь здесь уже c ' +new Date().toLocaleString() + ' секунд!'
      }
    }
  }

  Vue.createApp(AttributeBinding2).mount('#flights').mount('.dropdown');

  const AttributeBinding3 = {
    data() {
      return {
        message: 'Пользователь здесь уже c ' +new Date().toLocaleString() + ' секунд!'
      }
    }
  }

  Vue.createApp(AttributeBinding3).mount('#Italy');