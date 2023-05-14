import * as S from './styles'
import { RiLinkedinFill } from 'react-icons/ri'
import { BsGithub } from 'react-icons/bs'

export const Footer = () => {
  return (
    <S.Container>
      <span style={{ fontSize: '20px' }}>Contate-me</span>
      <span><a>andreysoares.dev@gmail.com</a></span>
      <span><a>Portfolio</a></span>

      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <a href="https://www.linkedin.com/in/andy-soares" target='_blank'>
          <RiLinkedinFill color='white' size={35} />
        </a>
        <a href="https://github.com/anndross" target='_blank'>
          <BsGithub color='white' size={35} />
        </a>
      </div>
    </S.Container>
  )
}