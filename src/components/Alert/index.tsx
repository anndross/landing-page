import { useEffect } from 'react'
import * as S from './styles'
import { GrStatusGood } from 'react-icons/gr'

type Props = {
  message: string
  canShow: boolean
  setCanShow(b: boolean): void
}

export const Alert = ({ message, canShow, setCanShow }: Props) => {
  const activeCSS = canShow && {
    right: '10px',
  }


  useEffect(() => {
    if (canShow) {
      setTimeout(() => {
        setCanShow(false)
      }, 3000)
    }
  }, [canShow])

  return (
    <S.Container style={{ ...activeCSS, visibility: (canShow ? 'visible' : 'hidden') }}>
      <GrStatusGood color="black" size={26} />
      <div>
        <span>Sucesso</span>
        <span>{message}</span>
      </div>
    </S.Container>
  )
}