import { useEffect, useRef, useState } from 'react';
import { Header } from '../../components/Header'
import * as S from './styles'
import { Button } from '../../components/Button';

export const Home = () => {
  const ref = useRef(null) as any

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header canChangeColor={scrollPosition > (ref?.current?.clientHeight - 120) ? '1' : ''} />
      <S.Container ref={ref}>
        <S.Informations>
          <h1>
            <span style={{ color: '#7640f5' }}>Programador</span>
            <br />
            Freelance
          </h1>
          <p>
            Olá, Muito prazer! Me chamo Andrey e sou um desenvolvedor de softwares,
            trabalhando sempre com as tecnologias mais atuais para oferecer um serviço
            de qualidade. Cada projeto será feito com os devidos cuidados e dedicação,
            para que o cliente saia satisfeito.
          </p>
          <a href="#my-services">
            <Button>Veja meus servicos</Button>
          </a>
        </S.Informations>
        <S.Images>
          <img style={{ borderRadius: '10px 20px 56px 100px' }} src='/assets/code1.png' />
          <img style={{ marginTop: '30px', borderRadius: '60px 20px' }} src='/assets/code2.png' />
          <img style={{ borderRadius: '60px 20px' }} src='/assets/code3.jpg' />
          <img style={{ marginTop: '30px', borderRadius: '30px 120px' }} src='/assets/code4.png' />
        </S.Images>
      </S.Container>
    </>
  )
}