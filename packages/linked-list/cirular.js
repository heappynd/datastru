import { LinkedList, Node } from './index.js'

export class CircularLinkedList extends LinkedList {
  constructor() {
    super()
  }

  push(element) {
    const node = new Node(element)
    let current = this.head

    if (this.head === null) {
      this.head = node
    } else {
      // 不是头部节点
      current = this.getNodeAt(this.count - 1)
      current.next = node
    }
    // 循环
    node.next = this.head
    this.count++
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      let current = this.head
      if (index === 0) {
        // 头部插入要改变指针
        if (this.head === null) {
          // 头部也没有
          this.head = node
          node.next = this.head
        } else {
          node.next = current
          // 先获取才行
          let last = this.getNodeAt(this.count - 1)
          this.head = node
          // 因为最后一个节点指向的是头节点 所以也要改变next
          console.log('last', last)
          last.next = node
        }
      } else {
        // 找到上一个节点
        const previous = this.getNodeAt(index - 1)
        node.next = previous.next
        previous.next = node
      }

      this.count++
      return true
    }
    return false
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head

      if (index === 0) {
        // 涉及0 就会影响头节点
        if (this.count === 1) {
          // 只有最后一个节点了
          this.head = null
        } else {
          let last = this.getNodeAt(this.count - 1)
          this.head = this.head.next
          last.next = this.head
        }
      } else {
        let previous = this.getNodeAt(index - 1)
        // 如果就是最后一个 那么current就为head
        current = previous.next
        previous.next = current.next
      }

      this.count--
      return current.element
    }
    return
  }
}

const list = new CircularLinkedList()

list.insert(1, 0)
list.push(2)
list.removeAt(0)
console.log(list)
