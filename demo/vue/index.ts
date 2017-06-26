import Vue from "vue";
import Component from "vue-class-component";
import "../../dist/vue";
import * as common from "../../dist/common";

Vue.component("main-page", {
    template: `<div>{{data}}</div>`,
    props: ["data"],
});

Vue.component("tab-page", {
    template: `<button>{{data}}</button>`,
    props: ["data"],
});

@Component({
    template: `
    <div>
        <a href="https://github.com/plantain-00/tab-container-component/tree/master/demo/vue/index.ts" target="_blank">the source code of the demo</a>
        <br/>
        <tab-container :data="data" @close="close($event)">
        </tab-container>
    </div>
    `,
})
class App extends Vue {
    data: common.TabContainerData[] = [
        {
            isActive: true,
            title: "main title",
            component: "main-page",
            data: "main data",
            canClose: true,
        },
        {
            isActive: false,
            title: "tab 1 title",
            component: "tab-page",
            data: "tab 1 data",
            canClose: true,
        },
        {
            isActive: false,
            title: "tab 2 title",
            component: "tab-page",
            data: "tab 2 data",
            canClose: true,
        },
    ];

    close(index: number) {
        if (this.data[index].isActive && index >= 1) {
            this.data[index - 1].isActive = true;
        }
        this.data.splice(index, 1);
        if (this.data.length === 1) {
            this.data[0].canClose = false;
        }
    }
}

// tslint:disable-next-line:no-unused-expression
new App({ el: "#container" });
