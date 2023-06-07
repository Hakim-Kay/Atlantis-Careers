import { render, screen } from '@testing-library/vue'

import ActionButton from '@/components/Shared/ActionButton.vue'

describe('ActionButton', () => {
  it('renders text', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })
    const button = screen.getByRole('button', {
      name: /Click me/i
    })
    expect(button).toBeInTheDocument()
  })

  it('renders primary button', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })
    const button = screen.getByRole('button', {
      name: /Click me/i
    })
    expect(button).toHaveClass('primary')
  })
})
