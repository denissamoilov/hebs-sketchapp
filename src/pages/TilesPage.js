// @flow
import * as React from 'react';
import { Artboard } from 'react-sketchapp';

type P = {
    name: string,
    style: any,
};

const tileList = {
    tile1: 'Tile 1',
    tile2: 'Tile 2',
}

const TileConfig = {
    name: 'Tile Name',
    content: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    button: 'Learn More'
}

const TilesPage = ({ name, style }: P) => (
    <Page name={name}>
        {Object.keys(tileList).map(tile => (
            <Artboard name={tile} style={{margin: '50px', width: '100px', height: '100px'}} />
        ))}
    </Page>
    
);

export default TilesPage;