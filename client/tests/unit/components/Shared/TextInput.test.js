import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import TextInput from '@/components/Shared/TextInput.vue'

describe('TextInput.vue', () => {
  it('communicates that user has entered text', async () => {
    const { emitted } = render(TextInput, {
      props: {
        modelValue: ''
      }
    })
    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'OLA')
    const messages = emitted()['update:modelValue']
    expect(messages).toEqual([['O'], ['OL'], ['OLA']])
  })
})
