import { PassProvider } from "./context/PassContext";

import "./index.css";
import { Checkbox } from "./components/Checkbox";
import { Card } from "./components/Card";
import { Title } from "./components/Title";
import { Input } from "./components/Input";
import { Level } from "./components/Level";
import {Send} from "./components/Send"
import ico from './assets/copy.svg'
import { Slider } from "./components/Slider";

function App() {

  return (
    <PassProvider >
      <div className="App">
        <Card>
          <div className="content">
            <Title title="Pass generator" />
            <Input ico={ico} personalization="pass-response" placeholder="CONtr4S3ña" type="text" isReadOnly={true} />
            <Slider />
            <Checkbox />
            <Level />
            <Send styleBtn="btn"  /> 
          </div>
        </Card>
      </div>
    </PassProvider>
  );
}

export default App;
