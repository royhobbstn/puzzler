import { data } from './data.js';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

function App() {
  return (
    <div>
      <AceEditor mode="javascript" theme="monokai" />
    </div>
  );
}

export default App;
