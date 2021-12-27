const App = {
  data() {
    return {
      Pidor_Danya: 'Privet Pidor, Danya'
    }
  }
};
Vue.createApp(App).mount('#app');

const EventHandling = {
  data() {
    return {
      Pidor_Danya: 'Pidor=Danya!'
    }
  },
  methods: {
    reverseMessage() {
      this.Pidor_Danya = this.Pidor_Danya
        .split('')
        .reverse()
        .join('')
    }
  }
}

Vue.createApp(EventHandling).mount('#event-handling');

// const ListRendering = {
//   data() {
//     return {
//       todos: [
//         { text: 'Danya Pidor' },
//         { text: 'Pidoras Danya' },
//         { text:'Pidrila Danila' }
//       ]
//     }
//   }
// }

// Vue.createApp(ListRendering).mount('#list-rendering');

var arrimg= new Array();
arrimg[0]=new Image();
arrimg[0].src="small.png";

var aaa = "small.png";
var bbb = "small1.png";
var ccc = "small2.png";

var imagelist = ["small.png","small1.png","small2.png"];

// function createimg(key,sizeA,sizeB) {
// var theimage = document.createElement("img");
// theimage.setAttribute('src', key);
// theimage.setAttribute('alt', 'image');
// theimage.height = sizeA;
// theimage.width = sizeB;
// document.body.appendChild(theimage);  
// }
// const TodoList = {
//   data() {
//     return {
//       groceryList: [
//         { id: 0, text: 'Danya Pidor '}, 
//         { id: 1, text: 'Pidoras Danya '},
//         { id: 2, text: 'Pidrila Danila '}
//       ]
//     }
//   }
// }

// const app = Vue.createApp(TodoList)

// app.component('todo-item', {
//   props: ['todo'],
//   template: `<li>{{ todo.text }}</li>`
// })
// document.getElementById('todo-item').appendChild(aaa);

// app.mount('#todo-list-app');

const Counter = {
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

// Vue.createApp(Counter).mount('#counter');

const AttributeBinding = {
  data() {
    return {
      message: 'Даня пидор уже ' + new Date().toJSON() + ' раз!'
    }
  }
}

Vue.createApp(AttributeBinding).mount('#bind-attribute');