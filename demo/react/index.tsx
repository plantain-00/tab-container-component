import * as React from "react";
import * as ReactDOM from "react-dom";
import { TabContainer } from "../../dist/react";
import * as common from "../../dist/common";

const MainPage: React.StatelessComponent<{ data: number }> = props => <div>{props.data}</div>;

const TabPage: React.StatelessComponent<{ data: number }> = props => <button>{props.data}</button>;

class Main extends React.Component<{}, {}> {
    data: common.TabContainerData[] = [
        {
            isActive: true,
            title: "main title",
            component: MainPage,
            data: "main data",
            canClose: true,
        },
        {
            isActive: false,
            title: "tab 1 title",
            component: TabPage,
            data: "tab 1 data",
            canClose: true,
        },
        {
            isActive: false,
            title: "tab 2 title",
            component: TabPage,
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
        this.setState({});
    }

    render() {
        return (
            <div>
                <a href="https://github.com/plantain-00/tab-container-component/tree/master/demo/react/index.tsx" target="_blank">the source code of the demo</a>
                <br />
                <TabContainer data={this.data} close={e => this.close(e)}>
                </TabContainer>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
