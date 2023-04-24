import { describe, expect, it } from 'vitest'
import { LinkedList } from '../'

describe('test linked list', () => {
  it('main', () => {
    const list = new LinkedList()

    list.push(1)
    list.push(2)
    list.push(3)
    list.push(4)

    // console.log(JSON.stringify(list))

    list.removeAt(2)
    console.log(JSON.stringify(list))

    console.log(list.getNodeAt(2));
  })
})
