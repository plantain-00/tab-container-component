import * as React from 'react'
import * as common from 'tab-container-component'
export * from 'tab-container-component'

/**
 * @public
 */
export class TabContainer extends React.Component<{
  data: common.TabContainerData[];
  close?: (index: number) => void;
  switching?: (index: number) => void;
}, unknown> {
  private hoveringItem: common.TabContainerData | null = null
  private getTabClass = common.getTabClass

  render() {
    const titles = this.props.data.map((item, i) => {
      const closeIcon = item.canClose && this.hoveringItem === item ? <span className='tab-close' onClick={e => this.close(e, i)}>&times;</span> : null
      const title = item.titleComponent
        ? React.createElement(item.titleComponent as React.ComponentClass<{ data: number }>, { data: item.titleData })
        : <a href='javascript:void(0)'>{item.title}</a>
      return (
        <li role='presentation'
          key={i}
          className={this.getTabClass(item, i)}
          onClick={() => this.clickTab(i)}
          onMouseEnter={() => this.mouseenter(item)}
          onMouseLeave={() => this.mouseleave()}>
          {title}
          {closeIcon}
        </li>
      )
    })
    const contents = this.props.data.map((item, i) => {
      const content = React.createElement(item.component as React.ComponentClass<{ data: number }>, { data: item.data })
      return (
        <div role='tabpanel' className={item.isActive ? 'active' : 'inactive'} key={i}>
          {content}
        </div>
      )
    })
    return (
      <div className='tab-container'>
        <ul className='tab-title'>
          {titles}
        </ul>
        <div className='tab-content'>
          {contents}
        </div>
      </div>
    )
  }

  private clickTab(index: number) {
    if (this.props.switching) {
      this.props.switching(index)
    }
    const item = this.props.data[index]
    if (item.isActive) {
      return
    }
    for (const itemData of this.props.data) {
      itemData.isActive = false
    }
    item.isActive = true
    this.setState({})
  }

  private mouseenter(item: common.TabContainerData) {
    this.hoveringItem = item
    this.setState({ hoveringItem: this.hoveringItem })
  }

  private mouseleave() {
    this.hoveringItem = null
    this.setState({ hoveringItem: this.hoveringItem })
  }

  private close(e: React.MouseEvent<HTMLSpanElement>, index: number) {
    e.stopPropagation()
    if (this.props.close) {
      this.props.close(index)
    }
  }
}
