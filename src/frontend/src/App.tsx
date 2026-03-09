import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppFloat from "./components/WhatsAppFloat";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import BathroomCleaningPage from "./pages/services/BathroomCleaningPage";
import BondCleaningPage from "./pages/services/BondCleaningPage";
import CarpetCleaningPage from "./pages/services/CarpetCleaningPage";
import KitchenCleaningPage from "./pages/services/KitchenCleaningPage";
import OvenCleaningPage from "./pages/services/OvenCleaningPage";
import WindowCleaningPage from "./pages/services/WindowCleaningPage";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

const rootRoute = createRootRoute({ component: Layout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});
const bondCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/bond-cleaning",
  component: BondCleaningPage,
});
const carpetCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/carpet-cleaning",
  component: CarpetCleaningPage,
});
const ovenCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/oven-cleaning",
  component: OvenCleaningPage,
});
const bathroomCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/bathroom-cleaning",
  component: BathroomCleaningPage,
});
const kitchenCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/kitchen-cleaning",
  component: KitchenCleaningPage,
});
const windowCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/window-cleaning",
  component: WindowCleaningPage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  bondCleaningRoute,
  carpetCleaningRoute,
  ovenCleaningRoute,
  bathroomCleaningRoute,
  kitchenCleaningRoute,
  windowCleaningRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
