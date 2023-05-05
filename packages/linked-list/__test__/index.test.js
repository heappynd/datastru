import { describe, expect, it } from 'vitest'
import { LinkedList } from '../'

describe('test linked list', () => {
  it('main', () => {
    const list = new LinkedList()

    expect(list.isEmpty()).toBe(true)

    list.push(1)
    list.push(2)
    list.push(3)
    list.push(4)

    expect(list.isEmpty()).toBe(false)
    expect(list.size()).toBe(4)

    expect(list.toString()).toBe('1 2 3 4')

    list.removeAt(2)
    expect(list.toString()).toBe('1 2 4')

    expect(list.getNodeAt(2)).toEqual({ element: 4, next: null })

    list.insert(5, 0)
    expect(list.toString()).toBe('5 1 2 4')
  })
})
