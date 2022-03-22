import Form from './Form';
import colorMode from './images/icon-sun.svg'

function App() {
  return (
    <div className="app">
    <div className="container">
         <div className="header">
           <h1>T O D O</h1>
           <img src={colorMode} height="auto" width="auto" />
         </div>
         
           <div className="tasks">
           <Form />
           </div>
    </div>
    </div>
  );
}

export default App;
