import { createApp, defineComponent } from 'vue'
import { TabContainer } from '../dist/'
import { TabContainerData } from '../dist/'

const App = defineComponent({
  template: `
    <div>
        <a href="https://github.com/plantain-00/tab-container-component/tree/master/packages/vue/demo" target="_blank">the source code of the demo</a>
        <br/>
        <tab-container :data="data" @close="close($event)">
        </tab-container>
    </div>
    `,
  data: () => {
    return {
      data: [
        {
          isActive: true,
          title: 'main title',
          component: 'main-page',
          data: 'main data',
          canClose: true
        },
        {
          isActive: false,
          title: 'tab 1 title',
          component: 'tab-page',
          data: 'tab 1 data',
          canClose: true
        },
        {
          isActive: false,
          title: 'tab 2 title',
          component: 'tab-page',
          data: 'tab 2 data',
          canClose: true
        },
        {
          isActive: false,
          titleComponent: 'custom-title',
          titleData: { title: 'custom title', count: 10 },
          component: 'tab-page',
          data: 'tab 3 data',
          canClose: true
        }
      ] as TabContainerData[],
    }
  },
  beforeMount() {
    setInterval(() => {
      if (this.data.length >= 4 && this.data[3].titleComponent) {
        this.data[3].titleData.count--
      }
    }, 1000)
  },
  methods: {
    close(index: number) {
      if (this.data[index].isActive && index >= 1) {
        this.data[index - 1].isActive = true
      }
      this.data.splice(index, 1)
      if (this.data.length === 1) {
        this.data[0].canClose = false
      }
    }
  }
})

const app = createApp(App)
app.component('tab-container', TabContainer)
app.component('main-page', {
  template: `<div>{{data}}</div>`,
  props: ['data']
})

app.component('tab-page', {
  template: `<button>{{data}}</button>`,
  props: ['data']
})

app.component('custom-title', {
  template: `<a href="javascript:void" style="color: red">{{data.title}}{{data.count > 0 ? "(" + data.count + ")" : ""}}</a>`,
  props: ['data']
})
app.mount('#container')
