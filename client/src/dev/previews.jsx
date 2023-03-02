import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import BrandBar from "../components/BrandBar";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/BrandBar">
                <BrandBar/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;