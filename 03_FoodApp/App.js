import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./src/components/Contact";
import ErrorPage from "./src/components/ErrorPage";
import Footer from "./src/components/Footer";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Loader from "./src/components/Shimmer/Loader";

// Header
//   - Logo
//   - Navigation ( Home, About Contact Cart)
// Body
//   - Search bar
//   - Button For Veg and Non Veg
//   - Restaurant Container
//       - Restaurant Card
// Footer
//   - Links
//   - Copyright
//   - Address
//   - Contact

const About = React.lazy(() => import("./src/components/About"));

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

let appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: (
					<Suspense fallback={<Loader className="w-10 h-10 animate-spin" />}>
						<About />
					</Suspense>
				),
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurant/:restaurantName/:restaurantId",
				element: <RestaurantMenu />,
			},
		],
		errorElement: <ErrorPage />,
	},
]);
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
