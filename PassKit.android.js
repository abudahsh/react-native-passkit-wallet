// /**
//  * @flow
//  */
// 'use strict'

// import { NativeModules } from 'react-native'
// import type EmitterSubscription from 'EmitterSubscription'

// const nativeModule = NativeModules.RNPassKit

// export default {
//   ...nativeModule,

//   presentAddPassesViewController: (base64Encoded: string): Promise<void> => {
//     // eslint-disable-next-line no-console
//     console.warn('PassKit.presentAddPassesViewController is deprecated. Use PassKit.addPass instead.')
//     return nativeModule.addPass(base64Encoded)
//   },

//   addEventListener: (
//     eventType: string,
//     listener: Function,
//     context: ?Object,
//   ): ?EmitterSubscription => (
//     null
//   ),

//   removeEventListener: (eventType: string, listener: Function): void => {},
// }
