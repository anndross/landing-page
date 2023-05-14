import * as S from './styles'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser'

import * as yup from "yup";
import { Alert } from '../../components/Alert';
import { useState } from 'react';
import { Button } from '../../components/Button';

type Inputs = {
  description: string,
  telephone: string,
  name: string,
  email: string,
};

const schema = yup.object({
  name: yup.string().required('Este campo é obrigatório'),
  email: yup.string().required('Este campo é obrigatório'),
  description: yup.string().required('Este campo é obrigatório'),
  telephone: yup.string(),
}).required();

export const Email = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })

  const [canShowAlert, setCanShowAlert] = useState(false)

  const onSubmit = (data: Inputs) => {
    const templateParams = {
      from_name: data.name,
      message: data.description,
      number: data.telephone,
      email: data.email
    }

    emailjs.send("service_m8hanar", "template_h1kvag8", templateParams, "jBhC6EvJ4q32VQ4Mi")
      .then(() => {
        setCanShowAlert(true)
        reset()
      })
  }

  const isRequired = (name: 'description' | 'name' | 'email') => {
    if (errors[name]?.message?.length) {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <S.Container id="email-section">
        <Alert
          message="seu email foi enviado!"
          canShow={canShowAlert}
          setCanShow={setCanShowAlert}
        />
        <S.Template onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1>Faça já um orçamento!</h1>
            <h2>me mande um email</h2>
          </div>
          <S.InputBox>
            <label htmlFor="name">Nome</label>
            <S.Input
              required={isRequired('name')}
              type='text'
              id="name"
              {...register("name")}
              placeholder="Nome"
            />
            <S.ErrorMessage>{errors.name?.message}</S.ErrorMessage>
          </S.InputBox>

          <S.InputBox>
            <label htmlFor="email">Seu email</label>
            <S.Input
              required={isRequired('email')}
              type='text'
              id="email"
              {...register("email")}
              placeholder="exemplo@gmail.com"
            />
            <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
          </S.InputBox>

          <S.InputBox>
            <label htmlFor="description">Descrição</label>
            <S.Description
              required={isRequired('description')}
              id="description"
              placeholder="Ex: Ola Andrey, me chamo Gabriel. Estou precisando de um site para a minha loja, necessito
              de uma aplicação que eu possa cadastrar e vender produtos de forma online. Onde o usuário poderá se cadastrar
              e guardar os seus itens em um carrinho. Tenho necessidade de um prazo de até um mês.
              "
              {...register("description")}
            />
            <S.ErrorMessage>{errors.description?.message}</S.ErrorMessage>
          </S.InputBox>

          <S.InputBox>
            <label htmlFor="telephone">Número para contato (opicional)</label>
            <S.Input
              type='text'
              id="telephone"
              {...register("telephone")}
              placeholder="+55 (11) 99999-9999"
            />
            <S.ErrorMessage>{errors.telephone?.message}</S.ErrorMessage>
          </S.InputBox>

          <Button>Enviar</Button>
        </S.Template>
      </S.Container >
    </>
  )
}