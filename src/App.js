import { PassProvider } from "./context/PassContext";

import "./index.css";
import { Layout } from "./components/Layout";
import { Checkbox } from "./components/Checkbox";
import { Card } from "./components/Card";
import { Title } from "./components/Title";
import { Input } from "./components/Input";
import { Level } from "./components/Level";
import {Send} from "./components/Send"
import ico from './assets/copy.svg'
import { Slider } from "./components/Slider";
import { Notification } from "./components/Notification";

function App() {

  return (
    <PassProvider >
      <Layout>
        <Card>
          <div className="content">
            <Title title="Pass generator" />
            <Input ico={ico} personalization="pass-response"  type="text" isReadOnly={true} />
            <Slider />
            <Checkbox />
            <Level />
            <Send styleBtn="btn"  /> 
          </div>
        </Card>
      </Layout>
    </PassProvider>
  );
}

export default App;
