import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'

import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue'

describe('JobSearchForm', () => {
  describe('when user submits form', () => {
    it("directs user to job results page w/ user's search parameters", async () => {
      // track how many times router.push() has been invoked
      const push = vi.fn()
      const $router = { push }

      render(JobSearchForm, {
        global: {
          mocks: {
            $router: $router
          },
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })
      const roleInput = screen.getByRole('textbox', {
        name: /role/i
      })
      await userEvent.type(roleInput, 'Vue Developer')
    })
  })
})
