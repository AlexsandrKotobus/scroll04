import * as yup from 'yup'


// конструкция валидирует значение? если значение  != true то выводит значение 'Необходимо согласие...'
const rulesCheckbox = yup.mixed().oneOf([true], 'Необходимо согласие с условиями акции')

const mailingCheckbox = yup.mixed().oneOf([true], 'Необходимо согласие на рассылку')


// создаем схему валидации - например, для новых пользователей
export const chemaSignUp = yup.object({
  // !!!
  //если какойто параметр необязателен для проверки  - его можно закоментировать
  rules: rulesCheckbox,
  mailings: mailingCheckbox,  
});