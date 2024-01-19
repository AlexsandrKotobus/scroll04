import React, {useState} from 'react'

import { Checkbox } from './Checkbox';

function FormCheck() {
  const [rulesChecked, setRulesChecked] = useState(false);
  const [mailChecked, setMailCheked] = useState(false);
  return (
    <section>
      <form className='form'>
        <Checkbox isChecked={rulesChecked} onChange={setRulesChecked}>
          Принимаю <a href="./doc.pdf"> правила </a> участия в акции   </Checkbox>
         
        <Checkbox isChecked={mailChecked} onChange={setMailCheked}>Соглашаюсь на рассылку новостей</Checkbox>
        <button type='submit'>Отправить</button>
      </form>
      

    </section>
    
  );
}

export default FormCheck;
