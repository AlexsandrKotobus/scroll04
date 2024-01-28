import React  from 'react'


// import AnimatedMenu from './components/AnimatedMenu/AnimatedMenu'
// import DropMenu from './components/DropMenu/DropMenu';

// import FormCheck from './components/Checkbox/FormCheck';
// import Header from './components/ResponsiveMenu/Header/Header'
// import Main from './components/ResponsiveMenu/Main/Main'

// import FormCheckValid from './components/CheckboxValid/FormCheckValid';
// import MenuRTG from './components/MenuReactTransitionGroup/MenuRTG';
import Accordion from './components/Accordion/Accordion';
import faqList from './components/Accordion/faqList';

function App() {
 console.log(faqList);
  return (
    <section>
     
      {/* <AnimatedMenu/> */}
      {/* <DropMenu /> */}
       
       {/* <FormCheck />  */}

      {/* <Header/>    */}
      {/* <Main/> */}
      {/* <FormCheckValid/> */}
      {/* <MenuRTG/> */}
      <Accordion faqList={faqList}/>
    </section>
    
  );
}

export default App;
