import { Switch, Route, Redirect } from 'react-router-dom';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route exact path="/quotes" component={Quotes} />
        <Route path="/quotes/:quoteId" component={QuoteDetail} />
        <Route path="/new" component={NewQuote} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
};
export default App;
