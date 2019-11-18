const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'black',
  'brown',
  'violet',
  'orange',
  'pink'
];

const app = new Vue({
  el: '#app',
  data: {
    message: 'My first Vue app!',
    styleInsert: 'color: blue'
  },
  methods: {
    changeColor() {
      this.styleInsert = `color: ${colors[Math.round(Math.random() * 10)]}`
    },
  },
});

