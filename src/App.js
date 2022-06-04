import React,{useState} from 'react';
import Logo from './Components/Logo';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Main from './Components/Main';
import {Helmet} from "react-helmet";
function App() {
  let [page,setPage]=useState(null);
  return(
<>
<Helmet>
<link rel="stylesheet" href="css/master.css" />
</Helmet>
  <Logo setPage={setPage}/>
  <Nav page={page} setPage={setPage} />
  <Main page={page}/>
  <div id="empty" />
  <Footer />
</>
  );

}

export default App;
