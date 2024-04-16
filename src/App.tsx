import { Button } from './components/Button/Button';
import './App.css';

function App() {
    return (
        <Button
            {...{
                color: 'primary',
                disabled: false,
                text: 'Label',
                type: 'button',
                variant: 'filled'
            }}
        />
    );
}

export default App;
