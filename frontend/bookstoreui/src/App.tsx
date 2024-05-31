import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { ExploreTopBooks } from "./layouts/Homepage/ExploreTopBooks";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { HomePage } from "./layouts/Homepage/HomePage";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { SearchBooks } from "./layouts/SearchBooksPage/SearchBooks";
import { BookCheckoutPage } from "./layouts/CheckoutPage/BookCheckoutPage";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>

          <Route path="/home">
            <HomePage />
          </Route>

          <Route path="/Search">
            <SearchBooks />
          </Route>

          <Route path="/checkout/:bookId">
            <BookCheckoutPage/>
          </Route>

        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
