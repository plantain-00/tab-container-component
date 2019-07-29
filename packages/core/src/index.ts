/**
 * @public
 */
export interface TabContainerData {
  isActive: boolean;
  title?: string;
  titleComponent?: string | Function;
  titleData?: any; // the data will be passed to the titleComponent as `data` props
  component: string | Function;
  data: any; // the data will be passed to the component as `data` props
  canClose?: boolean;
}

/**
 * @public
 */
export function getTabClass(item: TabContainerData, index: number) {
  const result = [`tab-${index}`]
  if (item.isActive) {
    result.push('active')
  }
  return result.join(' ')
}
