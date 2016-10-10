import expect from 'expect';
import Timer from './timer';
import { render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

describe('The Timer component', () => {
    it('is in a time.timer tag', () => {
        let output = setup(8, 15);
        expect(output.find('time.timer').length).toBe(1);
    });

    it('contains the time', () => {
        let output = setup(12, 15);
        expect(output.find('.timer').text()).toBe('12:15');
    });
    
    it('displays 0-9 with two digits', () => {
        let output = setup(8, 3);
        expect(output.find('.timer').text()).toBe('08:03');
    });

    it('displays 00:00 as anything else', () => {
        let output = setup(0, 0);
        expect(output.find('.timer').text()).toBe('00:00');
    });
});

function setup(minutes, seconds) {
    let props = {
        minutes: minutes,
        seconds: seconds
    };

    return render(<Timer {...props}/>);
}
