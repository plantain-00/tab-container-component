import Vue from "vue";
import Component from "vue-class-component";
import * as common from "./common";
export * from "./common";
import { vueTemplateHtml } from "./vue-variables";

@Component({
    template: vueTemplateHtml,
    props: ["data"],
})
class TabContainer extends Vue {
    data: common.TabContainerData[];

    hoveringItem: common.TabContainerData | null = null;

    clickTab(index: number) {
        this.$emit("switching", index);
        const item = this.data[index];
        if (item.isActive) {
            return;
        }
        for (const itemData of this.data) {
            itemData.isActive = false;
        }
        item.isActive = true;
    }

    mouseenter(item: common.TabContainerData) {
        this.hoveringItem = item;
    }

    mouseleave(item: common.TabContainerData) {
        this.hoveringItem = null;
    }

    close(e: MouseEvent, index: number) {
        e.stopPropagation();
        this.$emit("close", index);
    }
}

Vue.component("tab-container", TabContainer);
