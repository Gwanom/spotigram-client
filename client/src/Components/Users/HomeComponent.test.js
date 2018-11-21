import React from 'react';
import {HomeComponent} from './HomeComponent.jsx';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
    const div = document.createElement("div");
    const render = renderer.create(
        <HomeComponent />, div
    );
    render.unmount(div);
});