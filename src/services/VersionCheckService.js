import { Alert, Linking } from 'react-native';
import VersionCheck from 'react-native-version-check';

export const doVersionCheck = async () => {
  try {
    const updateNeeded = await VersionCheck.needUpdate();

    if (updateNeeded && updateNeeded.isNeeded) {
      Alert.alert(
        'Update Available',
        `A new version (${updateNeeded.latestVersion}) is available. Please update the app to the latest version for better performance and new features.`,
        [
          {
            text: 'Update Now',
            onPress: () => Linking.openURL(updateNeeded.storeUrl),
          },
          {
            text: 'Later',
            style: 'cancel',
          },
        ],
        { cancelable: false }
      );
    }
  } catch (error) {
    console.log("Version Check Error:", error);
  }
};