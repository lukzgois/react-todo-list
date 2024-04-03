import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '..'

describe('Button component', () => {
  it('renders a button', () => {
    const screen = render(<Button>Click me!</Button>)

    expect(screen.getByText(/Click me!/)).toBeTruthy()
  })

  it('handles the onClick event', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    const screen = render(<Button onClick={onClick}>Test</Button>)

    await user.click(screen.getByText(/Test/))

    expect(onClick).toHaveBeenCalled()
  })
})
