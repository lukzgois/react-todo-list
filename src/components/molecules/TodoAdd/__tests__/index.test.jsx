import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import TodoAdd from '..'

describe("TodoAdd Organism", () => {
  describe("Rendering", () => {
    it('has an input', () => {
      const screen = render(<TodoAdd />)

      expect(screen.getByPlaceholderText(/What to do next?/)).toBeTruthy()
    })

    it('has a button to add a task', () => {
      const screen = render(<TodoAdd />)

      expect(screen.getByRole('button')).toBeTruthy()
    })
  })

  describe('Creating a todo', () => {
    describe('if there is a value on the input', () => {
      it('fires an event with the input value', async () => {
        const onCreate = vi.fn()
        const user = userEvent.setup()
        const screen = render(<TodoAdd onCreate={onCreate} />)

        await user.type(screen.getByPlaceholderText(/What to do next?/), 'New Task')
        await user.click(screen.getByText(/Add a Task/))

        expect(onCreate).toHaveBeenCalledOnce()
        expect(onCreate).toHaveBeenCalledWith('New Task')
      })

      it('clears the input', async () => {
        const user = userEvent.setup()
        const screen = render(<TodoAdd />)

        await user.type(screen.getByPlaceholderText(/What to do next?/), 'New Task')
        await user.click(screen.getByText(/Add a Task/))

        expect(screen.getByPlaceholderText(/What to do next?/).value).toBe('')
      })

      it('focus on the input again', async () => {
        const user = userEvent.setup()
        const screen = render(<TodoAdd />)

        await user.type(screen.getByPlaceholderText(/What to do next?/), 'New Task')
        await user.click(screen.getByText(/Add a Task/))

        expect(screen.getByPlaceholderText(/What to do next?/)).toHaveFocus()
      })
    })

    describe('when an error exists', () => {
      describe('if there is no value on the input', () => {
        it('fires an error event', async () => {
          const onError = vi.fn()
          const user = userEvent.setup()
          const screen = render(<TodoAdd onError={onError} />)

          await user.click(screen.getByText(/Add a Task/))

          expect(onError).toHaveBeenCalledOnce()
        })
      })

      describe('if there is an empty string on the input', () => {
        it('fires an error event', async () => {
          const onError = vi.fn()
          const user = userEvent.setup()
          const screen = render(<TodoAdd onError={onError} />)

          await user.type(screen.getByPlaceholderText(/What to do next?/), '     ')
          await user.click(screen.getByText(/Add a Task/))

          expect(onError).toHaveBeenCalledOnce()
        })
      })

      it('focus on the input again', async () => {
        const user = userEvent.setup()
        const screen = render(<TodoAdd />)

        await user.click(screen.getByText(/Add a Task/))

        expect(screen.getByPlaceholderText(/What to do next?/)).toHaveFocus()
      })
    })
  })
})
