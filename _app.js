import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";
import store from './redux/store';

class HotelApp extends App {

  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be access by the client
    return {pageProps: pageProps};
  }

  render() {
    //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const {Component, pageProps} = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    )
  }

}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(HotelApp);