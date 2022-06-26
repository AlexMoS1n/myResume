import React from 'react';
import { Routes,Route, } from "react-router-dom";
import Maket from "./routes/Maket";
import DefaultMaket from "./routes/DefaultMaket";
import GeneralMaket from "./routes/GeneralMaket";
import SkillsMaket from "./routes/SkillsMaket";
import DiplomasMaket from "./routes/DiplomasMaket";
import ContactsMaket from "./routes/ContactsMaket";
import NotFoundPage from "./routes/NotFoundPage";
function Router(){
return(
  <div>
    <Routes>
      <Route path="/"  element={<Maket />} >
        <Route index element={<DefaultMaket />} />
        <Route path="general" element={<GeneralMaket />} />
        <Route path="skills" element={<SkillsMaket />} />
        <Route path="diplomas" element={<DiplomasMaket />} />
        <Route path="contacts" element={<ContactsMaket />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </div>
)
};
export default Router;
