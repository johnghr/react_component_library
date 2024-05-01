import './App.css';
import { IconButton } from './components/Buttons/Icon/IconButton';
import './test.scss';

function App() {
    return (
        <div className="test-class">
            <IconButton icon="add" label="add" tooltip="description of action" variant="filled" />
        </div>
    );
}

export default App;
