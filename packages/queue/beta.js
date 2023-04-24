export class Queue {
  #items = {}
  #lowCount = 0
  #count = 0

  dequeue() {
    if (this.isEmpty()) {
      return
    }
    let res = this.#items[this.#lowCount]
    delete this.#items[this.#lowCount]
    this.#lowCount++
    return res
  }

  enqueue(data) {
    this.#items[this.#count] = data
    this.#count++
  }

  // 返回队列头部
  front() {
    return this.#items[this.#lowCount]
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
    console.log(str)
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
