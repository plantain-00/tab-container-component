import Vue from "vue";
import Component from "vue-class-component";
import * as common from "tab-container-component";
export * from "tab-container-component";
import { indexTemplateHtml } from "./variables";

@Component({
    template: indexTemplateHtml,
    props: ["data"],
})
class TabContainer extends Vue {
    data: common.TabContainerData[];

    hoveringItem: common.TabContainerData | null = null;
    getTabClass = common.getTabClass;

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
