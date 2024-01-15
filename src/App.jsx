import React, {useState} from 'react'

// import  AnimatedMenu from './components/AnimatedMenu/AnimatedMenu'
// import DropMenu from './components/DropMenu/DropMenu';
import { Checkbox } from './components/Checkbox/Checkbox';

function App() {
  const [rulesChecked, setRulesChecked] = useState(false);
  const [mailChecked, setMailCheked] = useState(false);
  return (
    <section>
      {/* <div className="App"> */}
      {/* <AnimatedMenu/> */}
      {/* <DropMenu /> */}
      <form className='form'>
        <Checkbox isChecked={rulesChecked} onChange={setRulesChecked}>
          Принимаю <a href="./doc.pdf"> правила </a> участия в акции   </Checkbox>
        <Checkbox isChecked={mailChecked} onChange={setMailCheked}>Соглашаюсь на рассылку новостей</Checkbox>
        <button type='submit'>Отправить</button>
      </form>
      
    {/* </div> */}

    </section>
    
  );
}

export default App;
