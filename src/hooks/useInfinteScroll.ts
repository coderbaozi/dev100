import { createVNode, render } from 'vue'
import type { Ref } from 'vue'

export function useScroll() {
  async function init(fn: () => Promise<any[] | unknown>, continer: Ref, bottom?: HTMLDivElement) {
    await fn()
    if (!bottom) {
      const vnode = createVNode('div', { id: 'bottom' }, '已经到底了')
      render(vnode, continer.value)
      bottom = document.getElementById('bottom') as HTMLDivElement
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fn()
          console.log('元素出现')
        } else {
          console.log('元素隐藏')
        }
      })
    })
    observer.observe(bottom)
  }

  return { init }
}