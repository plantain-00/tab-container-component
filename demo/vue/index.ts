import Vue from "vue";
import Component from "vue-class-component";
// tslint:disable:no-duplicate-imports
import "../../dist/vue";
import { TabContainerData } from "../../dist/vue";

Vue.component("main-page", {
    template: `<div>{{data}}</div>`,
    props: ["data"],
});

Vue.component("tab-page", {
    template: `<button>{{data}}</button>`,
    props: ["data"],
});

Vue.component("custom-title", {
    template: `<a href="javascript:void" style="color: red">{{data.title}}{{data.count > 0 ? "(" + data.count + ")" : ""}}</a>`,
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
    data: TabContainerData[] = [
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
        {
            isActive: false,
            titleComponent: "custom-title",
            titleData: { title: "custom title", count: 10 },
            component: "tab-page",
            data: "tab 3 data",
            canClose: true,
        },
    ];

    beforeMount() {
        setInterval(() => {
            if (this.data.length >= 4 && this.data[3].titleComponent) {
                this.data[3].titleData.count--;
            }
        }, 1000);
    }

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

new App({ el: "#container" });
