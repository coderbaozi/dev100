import { createVNode, render } from 'vue'
import Message from './Message.vue'

const div = document.createElement('div')
div.setAttribute('class', 'message-container')
document.body.appendChild(div)

interface MessageProps {
  text: string
  type: string
  delay?: number
}

export default ({ text, type, delay = 2000 }: MessageProps) => {
  const sub = document.createElement('div')
  div.appendChild(sub)
  const vnode = createVNode(Message, { text, type })
  render(vnode, sub)
  setTimeout(() => {
    sub.remove()
  }, delay)
}
