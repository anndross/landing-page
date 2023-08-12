import * as S from "./styles"

type Props = {
  canChangeColor: string
}

export const Header = ({ canChangeColor }: Props) => {

  return (
    <S.Container color={canChangeColor}>
      <div>
        <h1>
          <span style={{ color: '#7640f5' }}>Andrey</span>
          &nbsp; Soares
        </h1>
      </div>
    </S.Container>
  )
}