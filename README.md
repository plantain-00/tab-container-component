[![Dependency Status](https://david-dm.org/plantain-00/tab-container-component.svg)](https://david-dm.org/plantain-00/tab-container-component)
[![devDependency Status](https://david-dm.org/plantain-00/tab-container-component/dev-status.svg)](https://david-dm.org/plantain-00/tab-container-component#info=devDependencies)
[![Build Status](https://travis-ci.org/plantain-00/tab-container-component.svg?branch=master)](https://travis-ci.org/plantain-00/tab-container-component)
[![npm version](https://badge.fury.io/js/tab-container-component.svg)](https://badge.fury.io/js/tab-container-component)
[![Downloads](https://img.shields.io/npm/dm/tab-container-component.svg)](https://www.npmjs.com/package/tab-container-component)

# tab-container-component
A vuejs and reactjs tab container component.

#### features

+ vuejs component
+ reactjs component
+ content is custom component
+ tab can be closed
+ title can be custom component

#### install

`npm i tab-container-component`

#### link css

```html
<link rel="stylesheet" href="./node_modules/tab-container-component/tab-container.min.css" />
```

#### vuejs component demo

`npm i vue vue-class-component`

```ts
import "tab-container-component/vue";
```

```html
<tab-container :data="data">
</tab-container>
```

the online demo: https://plantain-00.github.io/tab-container-component/demo/vue/index.html

#### reactjs component demo

```ts
import { TabContainer } from "tab-container-component/react";
```

```jsx
<TabContainer data={this.data}>
</TabContainer>
```

the online demo: https://plantain-00.github.io/tab-container-component/demo/react/index.html

#### properties and events of the component

name | type | description
--- | --- | ---
data | [TabContainerData](#tab-container-data-structure)[] | the data of the tab-container
close | (index: number)=>void | triggered when a tab is going to close
switching | (index: number)=>void | triggered when a tab is going to switch

#### tab-container data structure

```ts
export type TabContainerData = {
    isActive: boolean;
    title?: string;
    titleComponent?: string | Function;
    titleData?: any; // the data will be passed to the titleComponent as `data` props
    component: string | Function; // the item component, for vuejs, it is the component name, for reactjs, it is the class object
    data: any; // the data will be passed to the component as `data` props
    canClose?: boolean;
};
```

#### change logs

```ts
// v2
import "tab-container-component/vue";

// v1
import "tab-container-component/dist/vue";
```
