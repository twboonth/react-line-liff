import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const NoMatch = lazy(() => import("../pages/NoMatch"));
const User = lazy(() => import("../pages/User"));
const Home = lazy(() => import("../pages/Home"));
const Contact = lazy(() => import("../pages/Contact"));
const About = lazy(() => import("../pages/About"));
const Liff = lazy(() => import("../pages/Liff"));


export default function Router() {
  return (
    <>
      <Suspense fallback={<h1 className="title">Loading ...</h1>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<User />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="liff" element={<Liff />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </>
  );
}
