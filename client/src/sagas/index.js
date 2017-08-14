// Import the watcher we have just created
import {
  watchGetProducts
} from './products';

export default function* rootSaga () {
// We start all the sagas in parallel
  yield [
    watchGetProducts()
  ];
}