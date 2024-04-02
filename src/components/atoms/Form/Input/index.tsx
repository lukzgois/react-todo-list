import { ReactNode, forwardRef } from "react"

interface Props {
  className?: string
  children?: ReactNode;
}
export type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>((props, ref) => {
  const { className, ...rest } = props

  return (
    <input
      type="text"
      className={`w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
      {...rest}
      ref={ref}
    />
  )
})

export default Input
