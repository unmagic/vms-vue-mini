<h1 align="center">@unmagic/vue-mini</h1>

<p align="center">基于 Vue 3 响应式系统的小程序框架，为 VMS 编译器深度优化。</p>

## 简介

`@unmagic/vue-mini` 是一个专为微信小程序设计的轻量级框架，基于 Vue 3 的 `@vue/reactivity` 响应式系统构建。它是 [Vue Mini](https://github.com/vue-mini/vue-mini) 的一个衍生版本，专门针对 [VMS](https://github.com/unmagic/vms) (Vue Mini SFC) 编译器进行了特殊优化：

- 移除了 `page` 相关的 API（VMS 中所有页面和组件均通过 `defineComponent` 定义）
- 精简了运行时体积，专注于组件级开发
- 保留了完整的 Vue 3 Composition API 体验

## 包结构

| 包名                               | 说明                                             |
| ---------------------------------- | ------------------------------------------------ |
| `@unmagic/vue-mini`                | 核心运行时，提供响应式 API、生命周期、组件定义等 |
| `@unmagic/miniprogram-api-typings` | 微信小程序 API 的 TypeScript 类型定义            |

## 功能特性

- **Vue 3 Composition API** - 完整的 `ref`、`reactive`、`computed`、`watch` 等响应式 API
- **`<script setup>` 支持** - 配合 VMS 编译器，使用 Vue SFC 开发小程序
- **组件系统** - 通过 `defineComponent` 定义组件，支持 Props、生命周期、依赖注入
- **依赖注入** - 提供 `provide` / `inject` 实现跨组件状态共享
- **生命周期钩子** - 覆盖小程序完整的页面和组件生命周期
- **TypeScript 优先** - 完整的类型支持，提供出色的 IDE 体验

## 安装

```bash
npm install @unmagic/vue-mini
```

## 快速开始

```ts
import { createApp, defineComponent, ref, computed } from '@unmagic/vue-mini'

// 应用入口
export default createApp(() => {
  const count = ref(0)
  const double = computed(() => count.value * 2)

  const increment = () => {
    count.value++
  }

  return {
    count,
    double,
    increment,
  }
})
```

```vue
<!-- 配合 VMS 编译器使用 -->
<script setup lang="ts">
import { ref } from '@unmagic/vue-mini'

const msg = ref('Hello Vue Mini')
</script>

<template>
  <view>{{ msg }}</view>
</template>
```

## 相关项目

- [VMS](https://github.com/unmagic/vms) - Vue Mini SFC 编译器，将 Vue 单文件组件编译为微信小程序代码
- [Vue Mini](https://github.com/vue-mini/vue-mini) - 原版的 Vue 3 小程序框架

## 许可证

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2026-present Liu Biao
