import { useStorageLocal } from '~/composables/useStorageLocal'

export const newTabUrl = useStorageLocal('new-tab-url', 'https://ravigation.netlify.app/', { listenToStorageChanges: true })
