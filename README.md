# tab-container-component

[![Dependency Status](https://david-dm.org/plantain-00/tab-container-component.svg)](https://david-dm.org/plantain-00/tab-container-component)
[![devDependency Status](https://david-dm.org/plantain-00/tab-container-component/dev-status.svg)](https://david-dm.org/plantain-00/tab-container-component#info=devDependencies)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/tab-container-component?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/tab-container-component/branch/master)
[![npm version](https://badge.fury.io/js/tab-container-component.svg)](https://badge.fury.io/js/tab-container-component)
[![Downloads](https://img.shields.io/npm/dm/tab-container-component.svg)](https://www.npmjs.com/package/tab-container-component)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fplantain-00%2Ftab-container-component%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/tab-container-component)

A vuejs and reactjs tab container component.

## features

+ vuejs component
+ reactjs component
+ content is custom component
+ tab can be closed
+ title can be custom component

## link css

```html
<link rel="stylesheet" href="./node_modules/tab-container-component/dist/tab-container.min.css" />
```

## vuejs component

[![gzip size](https://img.badgesize.io/https://unpkg.com/tab-container-vue-component?compression=gzip)](https://unpkg.com/tab-container-vue-component)

`npm i tab-container-vue-component`

```ts
import { TabContainer } from "tab-container-vue-component";
app.component('tab-container', TabContainer)
```

or

```html
<script src="./node_modules/vue/dist/vue.min.js"></script>
<script src="./node_modules/tab-container-vue-component/dist/tab-container-vue-component.min.js"></script>
```

```html
<tab-container :data="data">
</tab-container>
```

the online demo: <https://plantain-00.github.io/tab-container-component/packages/vue/demo>

## reactjs component

[![gzip size](https://img.badgesize.io/https://unpkg.com/tab-container-react-component?compression=gzip)](https://unpkg.com/tab-container-react-component)

`npm i tab-container-react-component`

```ts
import { TabContainer } from "tab-container-react-component";
```

or

```html
<script src="./node_modules/react/umd/react.production.min.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.production.min.js"></script>
<script src="./node_modules/tab-container-react-component/dist/tab-container-react-component.min.js"></script>
```

```jsx
<TabContainer data={this.data}>
</TabContainer>
```

the online demo: <https://plantain-00.github.io/tab-container-component/packages/react/demo>

## properties and events of the component

name | type | description
--- | --- | ---
data | [TabContainerData](#tab-container-data-structure)[] | the data of the tab-container
close | (index: number)=>void | triggered when a tab is going to close
switching | (index: number)=>void | triggered when a tab is going to switch

## tab-container data structure

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

## change logs

```ts
// v3 vue 2
import 'tab-container-vue-component'
// v4 vue 3
import { TabContainer } from "tab-container-vue-component";
app.component('tab-container', TabContainer)
```

```bash
# v2
npm i tab-container-component

# v3
npm i tab-container-vue-component
npm i tab-container-react-component
```

```ts
// v2
import "tab-container-component/vue";
import { TabContainer } from "tab-container-component/react";

// v3
import "tab-container-vue-component";
import { TabContainer } from "tab-container-react-component";
```

```html
// v2
<link rel="stylesheet" href="./node_modules/tab-container-component/tab-container.min.css" />

// v3
<link rel="stylesheet" href="./node_modules/tab-container-component/dist/tab-container.min.css" />
```

```ts
// v2
import "tab-container-component/vue";

// v1
import "tab-container-component/dist/vue";
```
