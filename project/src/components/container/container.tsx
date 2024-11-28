import { ReactNode } from "react"
import styles from "./styles.module.scss"

interface ContainerProp {
  children: ReactNode;
  classNameProp: string;
}


export async function Container ({children, classNameProp}: ContainerProp) {
  return (
    <div className={classNameProp}>
      {children}
    </div>
  )
}

