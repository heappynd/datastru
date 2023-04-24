class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

new Node(100)

export class LinkedList {
  count = 0
  /**
   * @type { Node }
   */
  head = null

  push(element) {
    const node = new Node(element)
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  removeAt(index) {
    // 越界检查
    if (index >= 0 && index < this.count) {
      let current = this.head

      if (index === 0) {
        // 删除最前面的
        this.head = this.head.next
      } else {
        // 把前面的next指向当前的next就删除了
        // let previous
        // for (let i = 0; i < index; i++) {
        //   previous = current
        //   current = current.next
        // }
        // previous.next = current.next
        let previous = this.getNodeAt(index - 1)
        let current = previous.next
        previous.next = current.next
        this.count--
        return current.element
      }
    }

    return undefined
  }

  // 根据数据找到索引值
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count; i++) {
      if (this.equalFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  // 判断相等
  equalFn(a, b) {
    return a === b

    // 1, 判断对象 对象1[key] === 对象2[key]
    // 2, 需要递归，深度检查是否相等
    // return JSON.stringify(a) === JSON.stringify(b)

    // "immutable" library
  }

  // 指定数据删除
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  // 获取索引对应节点
  getNodeAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head
      for (let i = 0; i < index; i++) {
        node = node.next
      }
      return node
    }
    return
  }

  // TODO: insert
  insert() {}
}
