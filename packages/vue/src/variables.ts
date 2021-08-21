// @ts-nocheck
/**
 * This file is generated by 'file2variable-cli'
 * It is not mean to be edited by hand
 */
import { createBlock as _createBlock, createCommentVNode as _createCommentVNode, createElementBlock as _createElementBlock, createElementVNode as _createElementVNode, Fragment as _Fragment, normalizeClass as _normalizeClass, openBlock as _openBlock, renderList as _renderList, resolveDynamicComponent as _resolveDynamicComponent, toDisplayString as _toDisplayString } from 'vue'
// tslint:disable
/* eslint-disable */

export function indexTemplateHtml(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", { class: "tab-container" }, [
    _createElementVNode("ul", { class: "tab-title" }, [
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.data, (item, i) => {
        return (_openBlock(), _createElementBlock("li", {
          key: i,
          role: "presentation",
          class: _normalizeClass(_ctx.getTabClass(item, i)),
          onClick: $event => (_ctx.clickTab(i)),
          onMouseenter: $event => (_ctx.mouseenter(item)),
          onMouseleave: $event => (_ctx.mouseleave(item))
        }, [
          (item.titleComponent)
            ? (_openBlock(), _createBlock(_resolveDynamicComponent(item.titleComponent), {
                key: 0,
                data: item.titleData
              }, null, 8 /* PROPS */, ["data"]))
            : (_openBlock(), _createElementBlock("a", {
                key: 1,
                href: "javascript:void(0)"
              }, _toDisplayString(item.title), 1 /* TEXT */)),
          (item.canClose && _ctx.hoveringItem === item)
            ? (_openBlock(), _createElementBlock("span", {
                key: 2,
                class: "tab-close",
                onClick: $event => (_ctx.close($event, i))
              }, "×", 8 /* PROPS */, ["onClick"]))
            : _createCommentVNode("v-if", true)
        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["onClick", "onMouseenter", "onMouseleave"]))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    _createElementVNode("div", { class: "tab-content" }, [
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.data, (item, i) => {
        return (_openBlock(), _createElementBlock("div", {
          key: i,
          role: "tabpanel",
          class: _normalizeClass(item.isActive ? 'active' : 'inactive')
        }, [
          (_openBlock(), _createBlock(_resolveDynamicComponent(item.component), {
            data: item.data
          }, null, 8 /* PROPS */, ["data"]))
        ], 2 /* CLASS */))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}
/* eslint-enable */
// tslint:enable
