import React from 'react';
import Default from './Main_Components/Default';
import General from './Main_Components/General';
import Skills from './Main_Components/Skills';
import Diplomas from './Main_Components/Diplomas';
import Contacts from './Main_Components/Contacts';
function Main({page}){
let result;
switch (page) {
  case 0:
    result=<General />;
    break;
  case 1:
    result=<Skills />;
    break;
  case 2:
    result=<Diplomas />;
    break;
  case 3:
    result=<Contacts />;
    break;
  default:
    result=<Default />
    break;
}
  return(
    <main>
    {result}
      </main>
  )
};
export default Main
