/* eslint-disable react/jsx-filename-extension */
import {id as pluginId} from './manifest';

import FBPIcon from './components/icons';

import FBExtension from './components/fb_extension/collapse';

export default class Plugin {
    // eslint-disable-next-line no-unused-vars
    initialize(registry, store) {
        registry.registerExtensionPanelComponent(<FBPIcon/>, 'FB Settings', FBExtension);
    }
}

window.registerPlugin(pluginId, new Plugin());
