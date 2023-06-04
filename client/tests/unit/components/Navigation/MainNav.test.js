import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/Navigation/MainNav.vue'
import userEvent from '@testing-library/user-event'

describe('MainNav', () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        // stubbing out the FontAwesomeIcon component for a lightweight alternative
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }

  it('displays company name', () => {
    renderMainNav()
    const companyName = screen.getByText('Atlantis Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for navigation', () => {
    renderMainNav()
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuItemsTexts = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuItemsTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Atlantis',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })

  describe('when user clicks on the sign-in button', () => {
    it('displays user profile picture', async () => {
      renderMainNav()

      let profileImage = screen.queryByRole('img', {
        // regular expression to match the image alt text. 'i' means case insensitive //
        name: /User profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /Sign in/i
      })
      await userEvent.click(loginButton)

      profileImage = screen.getByRole('img', {
        name: /User profile image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
