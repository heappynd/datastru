import { Queue } from './beta.js'

function game(list, num) {
  let queue = new Queue()

  for (const item of list) {
    queue.enqueue(item)
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    console.log(queue.dequeue(), 'out!')
  }

  console.log(queue.front(), 'win!')
}

game([1, 2, 3, 4, 5], 7)
