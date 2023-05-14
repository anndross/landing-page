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
      {/* <S.LinkSections color={canChangeColor}>
        <a href="#">Portfolio</a>
        <a href="#">GitHub</a>
        <a href="#email-section">Mande-me um Email</a>
      </S.LinkSections> */}
    </S.Container>
  )
}