import { render, screen } from '@testing-library/vue'

import TheSubnav from '@/components/Navigation/TheSubnav.vue'

describe('TheSubnav', () => {
  const renderTheSubnav = (routeName) => {
    render(TheSubnav, {
      global: {
        mocks: {
          // $route is a mock object that will be passed to the const $route above
          $route: {
            name: routeName
          }
        },
        // stubbing out the FontAwesomeIcon component for a lightweight alternative
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }
  describe('when user is on jobs page', () => {
    it('should display the job count', () => {
      const routeName = 'JobResults'

      renderTheSubnav(routeName)

      const jobCount = screen.getByText('1023')
      expect(jobCount).toBeInTheDocument()
    })
  })

  describe('when user is not on jobs page', () => {
    it('should NOT display the job count', () => {
      const routeName = 'Home'

      renderTheSubnav(routeName)

      const jobCount = screen.queryByText('1023')
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
