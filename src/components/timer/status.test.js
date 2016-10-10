import React from 'react';
import {render} from 'enzyme';
import expect from 'expect';

import Status from './status';

let output = (props) => render(<Status {...props}/>);

describe('The status box', () => {
    describe('before starting', () => {});

    describe('while mobbing', () => {
        let state = {
            state: 'mobbing',
            mobster: 'chuck', // norris
            time: {
                minutes: 17,
                seconds: 42
            }
        };

        it('displays the time', () => {
            expect(output(state).text()).toContain('17:42');
        });

        it('displays the name of the mobster', () => {
            expect(output(state).text()).toContain('chuck');
        });
    });

    describe('when it\'s time to switch', () => {
        let state = {
            state: 'switch',
            mobster: 'chuck', // norris
            time: {
                minutes: 0,
                seconds: 0
            }
        };

        let status = output(state);

        it('displays the text \'switch!\'', () => {
            expect(status.text()).toContain('switch!');
        });

    });

    describe('before starting a mob', () => {
        let state = {
            time: {
                minutes: 0,
                seconds: 0
            },
            state: 'init',
            mobster: ''
        };

        let rendered = output(state);

        expect(rendered.text()).toContain('get started by clicking the gear wheel on the top right')
    });
});
