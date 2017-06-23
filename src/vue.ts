import Vue from "vue";
import Component from "vue-class-component";
import * as common from "./common";
import { srcVueTemplateHtml } from "./vue-variables";

@Component({
    template: srcVueTemplateHtml,
    props: ["data"],
})
class TabContainer extends Vue {
    data: common.TabContainerData;
}

Vue.component("tab-container", TabContainer);
