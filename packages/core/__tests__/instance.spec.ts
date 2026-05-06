import { defineComponent, onShow } from '../src'

// Mocks
let component: Record<string, any>
// @ts-expect-error
globalThis.Component = (options: Record<string, any>) => {
  component = {
    ...options,
    is: '',
    id: '',
    dataset: {},
    triggerEvent() {},
    createSelectorQuery() {},
    createIntersectionObserver() {},
    createMediaQueryObserver() {},
    selectComponent() {},
    selectAllComponents() {},
    selectOwnerComponent() {},
    getRelationNodes() {},
    groupSetData() {},
    getTabBar() {},
    getPageId() {},
    animate() {},
    clearAnimation() {},
    getOpenerEventChannel() {},
    applyAnimatedStyle() {},
    clearAnimatedStyle() {},
    setUpdatePerformanceListener() {},
    getPassiveEvent() {},
    setPassiveEvent() {},
    setInitialRenderingCache() {},
    setData(data: Record<string, unknown>) {
      this.data = this.data || {}
      Object.keys(data).forEach((key) => {
        this.data[key] = data[key]
      })
    },
  }
}

describe('instance', () => {
  test('unset current instance', () => {
    const fn = vi.fn()

    defineComponent(() => {
      onShow(fn)
    })

    expect(fn).toHaveBeenCalledTimes(0)

    component.pageLifetimes.show.call(component)
    expect(fn).toHaveBeenCalledTimes(0)
  })
})
