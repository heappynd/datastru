import { describe, expect, it } from 'vitest'
import { DeQueue } from '../'

describe('test dequeue', () => {
  it('main', () => {
    const d = new DeQueue()
    d.addBack(100)
    d.addBack(200)
    d.addBack(300)
    d.addBack(400)

    expect(d.toString()).toBe('100,200,300,400')

    d.addFront(10)
    expect(d.toString()).toBe('10,100,200,300,400')

    d.removeFront()
    d.removeFront()
    expect(d.toString()).toBe('200,300,400')

    d.addFront(20)
    expect(d.toString()).toBe('20,200,300,400')

    d.removeBack()
    d.removeBack()
    expect(d.toString()).toBe('20,200')

    expect(d.peekBack()).toBe(200)
    expect(d.peekFront()).toBe(20)
  })

  it('echo', () => {
    // 回文
    /**
     *
     * @param {string} str
     */
    function foo(str) {
      // 去掉首尾中间空格
      const lowstr = str.toLowerCase().split(' ').join('')
      console.log(lowstr)
      const dequeue = new DeQueue()
      for (let i = 0; i < lowstr.length; i++) {
        dequeue.addBack(lowstr[i])
      }
      while (dequeue.size() > 1) {
        const front = dequeue.removeFront()
        const back = dequeue.removeBack()
        if (front !== back) {
          return false
        }
      }
      return true
    }

    expect(foo('daad')).toBe(true)
    expect(foo('dd')).toBe(true)
    expect(foo('das')).toBe(false)
    expect(foo(' d a d ')).toBe(true)
  })
})
