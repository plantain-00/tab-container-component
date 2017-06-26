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
+ custom component
+ tab can close

#### install

`npm i tab-container-component`

#### link css

```html
<link rel="stylesheet" href="./node_modules/tab-container-component/dist/tab-container.min.css" />
```

#### vuejs component demo

`npm i vue vue-class-component`

```ts
import "tab-container-component/dist/vue";
```

```html
<tab-container :data="data">
</tab-container>
```

the online demo: https://plantain-00.github.io/tab-container-component/demo/vue/index.html

#### reactjs component demo

```ts
import { TabContainer } from "tab-container-component/dist/react";
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

#### tab-container data structure

```ts
export type TabContainerData = {
    isActive: boolean;
    title: string;
    component: string | Function; // the item component, for vuejs, it is the component name, for reactjs, it is the class object
    data: any; // the data will be passed to the component as `data` props
    canClose?: boolean;
};
```
