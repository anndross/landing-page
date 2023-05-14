import * as S from './styles'
import { TbBrandReactNative, TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'
import { SiStyledcomponents, SiNestjs, SiMongodb, SiMysql } from 'react-icons/si'
import { GrReactjs, GrNode, GrGraphQl } from 'react-icons/gr'
import { MdHtml, MdCss } from 'react-icons/md'
import { DiJavascript1 } from 'react-icons/di'


export const Services = () => {
  return (
    <S.Container id="my-services">
      <S.MyServices>
        <span>meus serviços</span>
        <S.Card style={{ gridArea: 'b' }}>
          <h2>Desenvolvimento Frontend</h2>
          <p>
            No frontend dou a vida à seus sonhos, o que era apenas um design ou uma ideia
            se torna realidade, utilizando sempre as melhores ferramentas e tecnologias,
            como React, utilizado por muitas plataformas famosas, Netflix, Airbnb, American Express, Facebook, WhatsApp, eBay e Instagram. Outras tecnologias também, Next.js, styled-components, typescript e HTML/CSS.
          </p>
          <h3>Tecnologias:</h3>
          <div>
            <GrReactjs />
            <TbBrandNextjs />
            <SiStyledcomponents />
            <TbBrandTypescript />
            <MdHtml />
            <MdCss />
            <DiJavascript1 />
          </div>
        </S.Card>
        <S.Card style={{ gridArea: 'c' }}>
          <h2>Desenvolvimento Backend</h2>
          <p>
            Assim como um restaurante não pode ficar sem sua cozinha, o frontend não pode ficar sem seu backend.
            Aqui trarei o que o lado do cliente necessitar, seja dados do database ou funcionalidades únicas,
            como o real time de um app de mensagens. As ferramentas utilizadas são, Node.js, NestJS, graphql, mongoDB, mysql, e
            typescript, apenas tecnologias de ponta para o melhor serviço.
          </p>
          <h3>Tecnologias:</h3>
          <div>
            <GrNode />
            <SiNestjs />
            <GrGraphQl />
            <SiMongodb />
            <SiMysql />
            <TbBrandTypescript />
          </div>
        </S.Card>
        <S.Card style={{ gridArea: 'd' }}>
          <h2>Desenvolvimento Mobile</h2>
          <p>
            Como o que foi citado no "Desenvolvimento Frontend" tinha um foco maior em desenvolvimento web,
            não posso deixar de citar quanto ao mobile, onde trás todo aquele pacote que você tanto gostaria de ter
            em seu celular, ou que todos tivessem, sempre utilizando as melhores ferramentas, como o React-Native, utilizado por nada mais
            nada menos que a Tesla, Tableau, Discord, Airbnb, Uber, Microsoft, Bloomberg, Walmart e Meta/Facebook.
          </p>
          <h3>Tecnologias:</h3>
          <div>
            <TbBrandReactNative />
            <TbBrandTypescript />
          </div>
        </S.Card>
      </S.MyServices>
    </S.Container>
  )
}