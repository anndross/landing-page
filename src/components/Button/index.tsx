import { ComponentPropsWithoutRef } from 'react'
import * as S from './styles'

type Props = ComponentPropsWithoutRef<'button'>

export const Button = ({ children, ...props }: Props) => {
  return (
    <S.Button {...props}>
      {children}
    </S.Button>
  )
}