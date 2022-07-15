import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import About from "./views/about";
import Blog_home from "./views/blog-home";
import Blog_post from "./views/blog-post";
import Contact from "./views/contact";
import Faq from "./views/faq";
import Index from "./views/index";
import Portfolio_item from "./views/portfolio-item";
import Portfolio_overview from "./views/portfolio-overview";
import Pricing from "./views/pricing";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Index />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/blog-home">
							<Blog_home />
						</Route>
						<Route exact path="/blog-post">
							<Blog_post />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/faq">
							<Faq />
						</Route>
						<Route exact path="/portfolio-item">
							<Portfolio_item />
						</Route>
						<Route exact path="/portfolio-overview">
							<Portfolio_overview />
						</Route>
						<Route exact path="/pricing">
							<Pricing />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
