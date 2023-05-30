import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('Atlantis Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for navigation', () => {
    render(MainNav)
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
})
