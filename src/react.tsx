import * as React from "react";
import * as common from "./common";

export class TabContainer extends React.Component<{
    data: common.TabContainerData[];
    close?: (index: number) => void;
    switching?: (index: number) => void;
}, {}> {
    hoveringItem: common.TabContainerData | null = null;

    clickTab(index: number) {
        if (this.props.switching) {
            this.props.switching(index);
        }
        const item = this.props.data[index];
        if (item.isActive) {
            return;
        }
        for (const itemData of this.props.data) {
            itemData.isActive = false;
        }
        item.isActive = true;
        this.setState({});
    }

    mouseenter(item: common.TabContainerData) {
        this.hoveringItem = item;
        this.setState({ hoveringItem: this.hoveringItem });
    }

    mouseleave(item: common.TabContainerData) {
        this.hoveringItem = null;
        this.setState({ hoveringItem: this.hoveringItem });
    }

    close(e: React.MouseEvent<HTMLSpanElement>, index: number) {
        e.stopPropagation();
        if (this.props.close) {
            this.props.close(index);
        }
    }

    render() {
        const titles = this.props.data.map((item, i) => {
            const closeIcon = item.canClose && this.hoveringItem === item ? <span onClick={e => this.close(e, i)}>&times;</span> : null;
            const title = item.titleComponent
                ? React.createElement(item.titleComponent as React.ComponentClass<{ data: number }>, { data: item.titleData })
                : <a href="javascript:void(0)">{item.title}</a>;
            return (
                <li role="presentation"
                    className={item.isActive ? "active" : ""}
                    onClick={() => this.clickTab(i)}
                    onMouseEnter={() => this.mouseenter(item)}
                    onMouseLeave={() => this.mouseleave(item)}>
                    {title}
                    {closeIcon}
                </li>
            );
        });
        const contents = this.props.data.map((item, i) => {
            const content = React.createElement(item.component as React.ComponentClass<{ data: number }>, { data: item.data });
            return (
                <div role="tabpanel" className={item.isActive ? "active" : "inactive"}>
                    {content}
                </div>
            );
        });
        return (
            <div className="tab-container">
                <ul className="tab-title">
                    {titles}
                </ul>
                <div className="tab-content">
                    {contents}
                </div>
            </div>
        );
    }
}
