import { Button } from './components/Button/Button';
import './App.css';
import './test.scss';

function App() {
    return (
        <div className="test-class">
            <Button
                {...{
                    iconLeft: 'add',
                    text: 'Label',
                    variant: 'filled'
                }}
            />
        </div>
    );
}

export default App;
