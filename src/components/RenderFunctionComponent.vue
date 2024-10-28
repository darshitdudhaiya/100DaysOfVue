<script>
import { h } from 'vue'

export default {
  name: 'RenderFunctionComponent',
  props: {
    items: {
      type: Array,
      default: () => ['Item 1', 'Item 2', 'Item 3']
    }
  },
  render() {
    const header = h('h2', 'Dynamic List of Items')

    const list = h(
      'ul',
      this.items.map((item) => h('li', { style: { color: '#42b983' } }, item))
    )

    return h('div', [header, list])
  }
}
</script>

<style scoped>
h2 {
  color: #333;
  font-size: 1.5em;
  margin-bottom: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 5px;
  font-size: 1.1em;
}
</style>
