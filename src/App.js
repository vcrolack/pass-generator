import "./index.css";
import { Checkbox } from "./components/Checkbox";
import { Card } from "./components/Card";
import { Title } from "./components/Title";
import { Input } from "./components/Input";
import {Slider} from './components/Slider'
import { Level } from "./components/Level";
import {Button} from "./components/Button"

function App() {
  return (
    <div className="App">
      <Card>
        <Title title="Pass generator" />
        <Input placeholder="CONtr4S3ña" type="text" isReadOnly={true} />
        <Slider />
        <Checkbox />
        <Level />
        <Button type="button" styleBtn="btn" value="Generate pass" />
      </Card>
    </div>
  );
}

export default App;
