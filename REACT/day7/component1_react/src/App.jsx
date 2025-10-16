
import './App.css'
import ButtonComponents from './components/ButtonComponent'
import FormComponents from './components/FormComponent';
import OrderedComponent from './components/OrderedComponent';
import UndodredComponenet from './components/UndodredComponent';

function App() {

  return (
    <>
    this is app.jsx
    <ButtonComponents />
    <FormComponents text={"hello there" } value={111} arr={[1,2,3]}/>
    <OrderedComponent/>
    <UndodredComponenet/>

    </>
  );
}

export default App
