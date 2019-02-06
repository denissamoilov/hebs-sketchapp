// @flow
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import * as React from 'react';
import sketch from 'sketch';
import { render, Document, Page, View, Artboard } from "react-sketchapp";

// import StyleguidePage from "./pages/Styleguide";
import TilesPage from "./pages/TilesPage";
import designSystem from "./designSystem";

export default context => {
    render(
        <Document system={designSystem}>
            <Page name="Tiles">
                <Artboard name="Blue Square" style={{padding: '24px'}}>
                    <View name="Blue Square" style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
                </Artboard>
            </Page>
            <Page name="Login">
                <Artboard name="Green Square" style={{padding: '24px'}}>
                    <View name="Green Square" style={{ width: 100, height: 100, backgroundColor: 'green' }} />
                </Artboard>
            </Page>
        </Document>,
        sketch.getSelectedDocument()
    );
}
