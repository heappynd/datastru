import { expect, it } from 'vitest'
import { describe } from 'vitest'
import { DoublyLinkedList } from '../doubly'

describe('doubly', () => {
  it('test 1', () => {
    const list = new DoublyLinkedList()

    expect(list.isEmpty()).toBe(true)

    list.push(1)
    list.push(2)
  })
})
