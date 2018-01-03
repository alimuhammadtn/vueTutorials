var obj = {
          foo: 'bar'
          }

          //Object.freeze(obj)

          new Vue({
          el: '#app',
          data () {
          return {
          obj
          }
          }
          })

Vue.component('todo-item', {
  props: ['ali'],
  template: '<li>{{ ali.text }}</li>'
})
}

/***helo here***/


  

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

