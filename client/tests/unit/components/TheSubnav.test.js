import { render, screen } from '@testing-library/vue'

import TheSubnav from '@/components/TheSubnav.vue'

describe('TheSubnav', () => {
  describe('when user is on jobs page', () => {
    it('should display the job count', () => {
      render(TheSubnav, {
        global: {
          // stubbing out the FontAwesomeIcon component for a lightweight alternative
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: true
          }
        }
      })
      const jobCount = screen.getByText('1023')
      expect(jobCount).toBeInTheDocument()
    })
  })
  describe('when user is not on jobs page', () => {
    it('should not display the job count', () => {
      render(TheSubnav, {
        global: {
          // stubbing out the FontAwesomeIcon component for a lightweight alternative
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: false
          }
        }
      })
      const jobCount = screen.queryByText('1023')
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
