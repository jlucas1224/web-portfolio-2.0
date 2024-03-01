import { ReactNode } from "react"

interface SkillComponentProps {
  children: ReactNode,
  skillName: string,
  skillDescription: string,
}

export function SkillComponent({ children, skillDescription, skillName } : SkillComponentProps) {
  return (
    <div className='max-w-6xl flex justify-center md:justify-between lg:justify-between lg:mx-auto items-center'>
      <div className="text-center md:text-left lg:text-left grid max-w-[60%]">
        <span className="text-4xl text-blue-500">{skillName}</span>
        <span className="text-base pt-10">{skillDescription}</span>
      </div>
      <div className="justify-center lg:flex md:flex hidden min-w-[40%]">
        {children}
      </div>
    </div>
  )
}