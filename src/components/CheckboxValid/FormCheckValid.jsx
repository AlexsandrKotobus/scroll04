import React from 'react'
import {useForm, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
// import * as yup from 'yup'
import {chemaSignUp} from './Shema'

import { CheckboxValid } from './CheckboxValid';


function FormCheckValid() {
  // получаем методы useForm в объект methods
  const method = useForm({
    // и указываем параметр валидации - при изменении значения
    mode: 'onChange',
    // подключаем схему валидации через yupResolver
    resolver: yupResolver(chemaSignUp),
  });
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <section>
      <FormProvider {...method}>
        <form className='form' onSubmit={method.handleSubmit(onSubmit)}>
          <CheckboxValid name='rules'> Принимаю ЭТО <a href="./doc.pdf"> правила </a> участия в акции   </CheckboxValid>
          <CheckboxValid name='mailings'>НЕ Соглашаюсь на  рассылку новостей</CheckboxValid>
          <button type='submit'>Отправить ФОРМУ</button>
        </form>

      </FormProvider>
      
      

    </section>
    
  );
}

export default FormCheckValid;
