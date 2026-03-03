import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Screen: React.FC<Props> = ({ children }) => {
  return (
    <div
      id="screen"
      className="bg-[url('../public/bg/texture.jpg')] font-EditorialNew px-3 sm:px-4 md:px-6 pt-4 min-h-screen text-zinc-800"
    >
      {children}
    </div>
  )
}

export default Screen
