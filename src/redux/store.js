import { configureStore } from '@reduxjs/toolkit';
import counterReduser from './slices/counter';
import photoDownloaderReduser from './slices/photoDownloader';
import photoSelectedReduser from './slices/photoSelected';

const store = configureStore({
  reducer: {
    counter: counterReduser,
    photoDownloader: photoDownloaderReduser,
    photoSelected: photoSelectedReduser
  }
})

export default store;