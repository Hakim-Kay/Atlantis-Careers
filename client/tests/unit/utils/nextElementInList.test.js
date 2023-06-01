import nextElementInList from '@/utils/nextElementInList'

describe('nextElementInList', () => {
  it('locates and returns the next element in the list', () => {
    const list = ['a', 'b', 'c']
    const currentElement = 'b'
    const nextElement = nextElementInList(list, currentElement)
    expect(nextElement).toEqual('c')
  })

  it('returns the first element in the list if the current element is the last element in the list', () => {
    const list = ['a', 'b', 'c']
    const currentElement = 'c'
    const nextElement = nextElementInList(list, currentElement)
    expect(nextElement).toEqual('a')
  })
})
