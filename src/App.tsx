import "./App.css";
import Form from "components/Form";
import { useState } from "react";

function App() {
  const [isSubmited, setIsSubmited] = useState(false);

  return (
    <div className="App">
      <div className="App-header"></div>

      <h1>Oi meu chapa!</h1>

      {isSubmited && <p>Formulario enviado</p>}

      <Form
        onSubmit={() => {
          setIsSubmited(true);
        }}
      />
    </div>
  );
}

export default App;
