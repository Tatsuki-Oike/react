import { RecoilRoot } from 'recoil';
import GetItem from './components/getItem';
import AddItem from './components/addItem';

function App() {
  return (
    <div className="container">
      <RecoilRoot>
        <AddItem/>
        <GetItem/>
      </RecoilRoot>
    </div>
  );
}

export default App;
