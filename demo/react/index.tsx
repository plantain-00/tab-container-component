import * as React from "react";
import * as ReactDOM from "react-dom";
import { TabContainer } from "../../dist/react";
import * as common from "../../dist/common";

class Main extends React.Component<{}, {}> {
    data: common.TabContainerData;

    render() {
        return (
            <div>
                <a href="https://github.com/plantain-00/tab-container-component/tree/master/demo/react/index.tsx" target="_blank">the source code of the demo</a>
                <br/>
                <TabContainer data={this.data}>
                </TabContainer>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
