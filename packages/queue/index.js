class Queue {
  #items = []

  dequeue() {
    return this.#items.shift()
  }

  enqueue(data) {
    this.#items.push(data)
  }

  // 返回队列头部
  front() {
    return this.#items[0]
  }

  isEmpty() {
    return this.#items.length === 0
  }

  size() {
    return this.#items.length
  }

  clear() {
    this.#items = []
  }

  toString() {
    console.log(this.#items.toString())
  }
}

const queue = new Queue()

queue.isEmpty()

queue.enqueue(1)
queue.enqueue(11)
queue.enqueue(111)

queue.toString()

queue.dequeue()

queue.toString()
