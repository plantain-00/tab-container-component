import { defineComponent, PropType } from 'vue'
import * as common from 'tab-container-component'
export * from 'tab-container-component'
import { indexTemplateHtml } from './variables'

/**
 * @public
 */
export const TabContainer = defineComponent({
  render: indexTemplateHtml,
  props: {
    data: {
      type: Array as PropType<common.TabContainerData[]>,
      required: true,
    }
  },
  data: () => {
    return {
      hoveringItem: null as common.TabContainerData | null,
      getTabClass: common.getTabClass
    }
  },
  methods: {
    clickTab(index: number) {
      this.$emit('switching', index)
      const item = this.data[index]!
      if (item.isActive) {
        return
      }
      for (const itemData of this.data) {
        itemData.isActive = false
      }
      item.isActive = true
    },
    mouseenter(item: common.TabContainerData) {
      this.hoveringItem = item
    },
    mouseleave() {
      this.hoveringItem = null
    },
    close(e: MouseEvent, index: number) {
      e.stopPropagation()
      this.$emit('close', index)
    },
  }
})
