import Vue from "vue";
import Component from "vue-class-component";
import "../../dist/vue";
import * as common from "../../dist/common";

@Component({
    template: `
    <div>
        <a href="https://github.com/plantain-00/tab-container-component/tree/master/demo/vue/index.ts" target="_blank">the source code of the demo</a>
        <br/>
        <tab-container :data="data">
        </tab-container>
    </div>
    `,
})
class App extends Vue {
    data: common.TabContainerData;
}

// tslint:disable-next-line:no-unused-expression
new App({ el: "#container" });
