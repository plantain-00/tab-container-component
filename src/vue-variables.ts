export const srcVueTemplateHtml = `<div class="tab-container"><ul class="tab-title"><li v-for="(item, i) in data" role="presentation" :class="item.isActive ? 'active' : ''" @click="clickTab(i)" @mouseenter="mouseenter(item)" @mouseleave="mouseleave(item)"><component v-if="item.titleComponent" :is="item.titleComponent" :data="item.titleData"></component><a v-else href="javascript:void(0)">{{item.title}}</a><span v-if="item.canClose && hoveringItem === item" @click="close($event, i)">&times;</span></li></ul><div class="tab-content"><div v-for="item in data" role="tabpanel" :class="item.isActive ? 'active' : 'inactive'"><component :is="item.component" :data="item.data"></component></div></div></div>`;