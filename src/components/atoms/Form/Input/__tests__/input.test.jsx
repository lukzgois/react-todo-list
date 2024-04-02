import { fireEvent, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Input from "../index.tsx";

describe("Input Component", () => {
  it("renders a input element", () => {
    const input = render(<Input placeholder="Testing input" />);

    expect(input.getByPlaceholderText('Testing input')).toBeTruthy()
  });

  it('sets the value on the input', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()
    const screen = render(<Input placeholder="Enter text" onChange={handleChange} />)
    const input = screen.getByPlaceholderText('Enter text')

    await user.type(input, 'changed')

    expect(input).toHaveValue('changed')
  })

  it('handles the onChange event', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()
    const screen = render(<Input placeholder="Enter text" onChange={handleChange} />)
    const input = screen.getByPlaceholderText('Enter text')

    await user.type(input, 'changed')

    expect(handleChange).toHaveBeenCalled()
  })
});
