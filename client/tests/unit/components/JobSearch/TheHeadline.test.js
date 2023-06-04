import { nextTick } from 'vue'
import { render, screen } from '@testing-library/vue'

import TheHeadline from '@/components/JobSearch/TheHeadline.vue'

describe('TheHeadline', () => {
  // setup - fake timers
  beforeEach(() => {
    vi.useFakeTimers()
  })

  // cleanup - reset timers
  afterEach(() => {
    vi.useRealTimers()
  })

  it('displays introductory action verb', () => {
    render(TheHeadline)

    const actionVerb = screen.getByRole('heading', {
      name: /bUild for everyone/i
    })
    expect(actionVerb).toBeInTheDocument()
  })

  it('changes action verb at a consistent interval', () => {
    const mock = vi.fn() // mock function
    vi.stubGlobal('setInterval', mock)
    render(TheHeadline)

    expect(mock).toHaveBeenCalled()
  })

  it('swaps action verb after interval', async () => {
    render(TheHeadline)
    vi.advanceTimersToNextTimer()

    await nextTick()
    const actionVerb = screen.getByRole('heading', {
      name: /learn for everyone/i
    })

    expect(actionVerb).toBeInTheDocument()
  })

  it('removes interval when component disappears', () => {
    const clearInterval = vi.fn()
    vi.stubGlobal('clearInterval', clearInterval)

    const { unmount } = render(TheHeadline)
    unmount()
    expect(clearInterval).toHaveBeenCalled()
    vi.unstubAllGlobals()
  })
})
