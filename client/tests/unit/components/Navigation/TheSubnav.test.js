import { render, screen } from '@testing-library/vue'

import TheSubnav from '@/components/Navigation/TheSubnav.vue'

describe('TheSubnav', () => {
  describe('when user is on jobs page', () => {
    it('should display the job count', () => {
      // mocking the $route object
      const $route = {
        name: 'JobResults'
      }

      render(TheSubnav, {
        global: {
          mocks: {
            // $route is a mock object that will be passed to the const $route above
            $route: $route
          },
          // stubbing out the FontAwesomeIcon component for a lightweight alternative
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })
      const jobCount = screen.getByText('1023')
      expect(jobCount).toBeInTheDocument()
    })
  })
  describe('when user is not on jobs page', () => {
    it('should not display the job count', () => {
      const $route = {
        name: 'Home'
      }

      render(TheSubnav, {
        global: {
          mocks: {
            $route: $route
          },
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })
      const jobCount = screen.queryByText('1023')
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
