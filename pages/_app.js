import '../styles/globals.css' ;
import store from "../store" ;
import { Provider } from 'react-redux' ;
import {fetchPosts} from "../features/posts/postSlice"

function MyApp({ Component, pageProps }) {
  store.dispatch(fetchPosts()) ;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
     )
}

export default MyApp
