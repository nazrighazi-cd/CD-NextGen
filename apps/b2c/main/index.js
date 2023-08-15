import { AppRegistry, Platform } from 'react-native';
import { ScriptManager, Script, Federated } from '@callstack/repack/client';
import App from './src/app/App';

const resolveURL = Federated.createURLResolver({
  containers: {
    reload: 'http://localhost:9000/[name][ext]',
  },
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  if (caller === 'host') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent('Main', () => App);
