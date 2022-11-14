import { useContext } from "react";

import { PassContext } from "./context/PassContext";

import "./index.css";
import { Checkbox } from "./components/Checkbox";
import { Card } from "./components/Card";
import { Title } from "./components/Title";
import { Input } from "./components/Input";
import { Level } from "./components/Level";
import {Button} from "./components/Button"
import ico from './assets/copy.svg'
import { Slider } from "./components/Slider";

function App() {

  const passContext = useContext(PassContext);

  const handleClick = e => {
    console.log(passContext)
  };

  return (
    <div className="App">
      <Card>
        <div className="content">
          <Title title="Pass generator" />
          <Input ico={ico} personalization="pass-response" placeholder="CONtr4S3ña" type="text" isReadOnly={true} />
          <Slider />
          <Checkbox />
          <Level />
          <Button callback={handleClick} type="button" styleBtn="btn" value="Generate pass" /> 
        </div>
      </Card>
    </div>
  );
}

export default App;
