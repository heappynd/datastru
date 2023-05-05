import { LinkedList, Node } from './index.js'

class DoublyNode extends Node {
  constructor(element) {
    super(element)
    this.prev = null
  }
}

export class DoublyLinkedList extends LinkedList {
  constructor() {
    super()
    this.tail = null
  }

  push(element) {
    const node = new DoublyNode(element)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.count++
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element)
      let current = this.head
      if (index === 0) {
        if (this.head === null) {
          // 头部插入，且当前头为空
          this.head = node
          this.tail = node
        } else {
          // 头部插入，且当前头不为空
          node.next = this.head
          this.head.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        // 尾部插入
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        // 中间插入
        const previous = this.getNodeAt(index - 1)
        current = previous.next

        node.next = current
        current.prev = node
        node.prev = previous
        previous.next = node
      }

      this.count++
      return true
    }
    return false
  }

  removeAt(index) {
    // 不能等于count 这个位置没有元素
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        // 会改变链表头
        this.head = current.next
        if (this.count === 1) {
          // 链表 头尾相同
          this.tail = null
        } else {
          // 记住把头部删除的
          this.head.prev = null
        }
      } else if (index === this.count - 1) {
        // 就是最后一个 链表尾部
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        let previous = this.getNodeAt(index - 1)
        current = previous.next
        previous.next = current.next

        current.next.prev = previous
      }

      this.count--
      return current.element
    }
    return
  }

  getHead() {
    return this.head
  }

  getTail() {
    return this.tail
  }
}

let list = new DoublyLinkedList()

// list.insert(100, 0)
// list.insert(20, 0)
// list.insert(300, 2)
// list.insert(400, 3)
// list.insert(150, 2)
list.push(100)
list.push(200)
list.push(300)
// console.log(list.removeAt(2));
// console.log(list.removeAt(1));
// console.log(list.removeAt(0));
console.log(list.removeAt(1));
console.log(list)
