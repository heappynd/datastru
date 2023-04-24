// 双端队列 同时 先进先出 先进后出
export class DeQueue {
  #items = {}
  #lowCount = 0
  #count = 0

  removeFront() {
    if (this.isEmpty()) {
      return
    }
    let res = this.#items[this.#lowCount]
    delete this.#items[this.#lowCount]
    this.#lowCount++
    return res
  }

  addBack(data) {
    this.#items[this.#count] = data
    this.#count++
  }

  // 加到队头
  addFront(data) {
    if (this.isEmpty()) {
      this.addBack(data)
    } else {
      // lowcount > 0 在lowcount位置上放置元素
      if (this.#lowCount > 0) {
        this.#lowCount--
        this.#items[this.#lowCount] = data
      } else {
        // lowcount === 0
        for (let i = this.#count; i > 0; i--) {
          this.#items[i] = this.#items[i - 1]
        }
        this.#items[0] = data
        this.#count++
      }
    }
  }

  removeBack() {
    if (this.isEmpty()) {
      return
    }
    this.#count--
    let res = this.#items[this.#count]
    delete this.#items[this.#count]

    return res
  }

  // 返回队列头部
  peekFront() {
    return this.#items[this.#lowCount]
  }

  peekBack() {
    return this.#items[this.#count - 1]
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.#count - this.#lowCount
  }

  clear() {
    this.#items = {}
  }

  toString() {
    let str = ''
    for (const key in this.#items) {
      str += this.#items[key] + ','
    }
    return str.slice(0, -1)
  }
}
