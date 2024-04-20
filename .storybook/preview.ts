import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        backgrounds: {
            values: [
                {
                    name: 'Material Design Light',
                    value: '#FEF7FF'
                }
            ]
        }
    }
};

export default preview;
