import { ReactNode } from "react"

type HeaderProps = {
  className: string
  children: ReactNode
}

const Header = ({ className, children }: HeaderProps) => {
  return (
    <h1 className={`text-5xl font-extrabold text-black ${className}`}>
      {children}
    </h1>
  )
}

export default Header
