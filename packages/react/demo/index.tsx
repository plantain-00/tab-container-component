import * as React from "react";
import * as ReactDOM from "react-dom";
import { TabContainer, TabContainerData } from "../dist/";

const MainPage: React.StatelessComponent<{ data: number }> = props => <div>{props.data}</div>;

const TabPage: React.StatelessComponent<{ data: number }> = props => <button>{props.data}</button>;

const CustomTitle: React.StatelessComponent<{ data: { title: string; count: number } }> = props => <a href="javascript:void" style={{ color: "red" }}>{props.data.title}{props.data.count > 0 ? `(${props.data.count})` : ""}</a>;

class Main extends React.Component<{}, {}> {
    private data: TabContainerData[] = [
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
        {
            isActive: false,
            titleComponent: CustomTitle,
            titleData: { title: "custom title", count: 10 },
            component: TabPage,
            data: "tab 3 data",
            canClose: true,
        },
    ];

    componentWillMount() {
        setInterval(() => {
            if (this.data.length >= 4 && this.data[3].titleComponent) {
                this.data[3].titleData.count--;
                this.setState({});
            }
        }, 1000);
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

    private close(index: number) {
        if (this.data[index].isActive && index >= 1) {
            this.data[index - 1].isActive = true;
        }
        this.data.splice(index, 1);
        if (this.data.length === 1) {
            this.data[0].canClose = false;
        }
        this.setState({});
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
