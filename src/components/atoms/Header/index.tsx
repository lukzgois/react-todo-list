import { ReactNode } from "react"

type HeaderProps = {
  children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return (
    <h1 className="text-5xl font-extrabold text-black">
      {children}
    </h1>
  )
}

export default Header
