import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import AnimationLayout from './utils/RouteAnimation';
import { RequireAuth, NotRequireAuth } from './components/auth/AuthComp';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const ProductListPage = React.lazy(() => import("./pages/ProductListPage"));
const SignInPage = React.lazy(() => import("./pages/user/SignInPage"));
const SignUpPage = React.lazy(() => import("./pages/user/SignUpPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const DashboardLayout = React.lazy(() => import("./pages/user/DashboardLayout"));

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComp themeColor={'light'} />
        <Routes>
          <Route element={<AnimationLayout />}>
            <Route exact path="/" element={<HomePage />} />

            <Route
              path="about-us"
              element={<React.Suspense fallback={<><h4>Loading...</h4></>}> <AboutUsPage /> </React.Suspense>}
            />
            <Route
              path="contact-us"
              element={<React.Suspense fallback={<><h4>Loading...</h4></>}> <ContactPage /> </React.Suspense>}
            />
            <Route
              path="products/:prodCat"
              element={<React.Suspense fallback={<><h4>Loading...</h4></>}> <ProductListPage /> </React.Suspense>}
            />
            <Route
              path="product/:prodSlug/:prodSku"
              element={<React.Suspense fallback={<><h4>Loading...</h4></>}> <ProductDetail /> </React.Suspense>}
            />
            <Route
              path="sign-in"
              element={<React.Suspense fallback={<><h4>Loading...</h4></>}> <NotRequireAuth redirectTo="/"> <SignInPage /> </NotRequireAuth> </React.Suspense>}
            />
            <Route
              path="sign-up"
              element={<React.Suspense fallback={<><h4>Loading...</h4></>}> <NotRequireAuth redirectTo="/"> <SignUpPage /> </NotRequireAuth> </React.Suspense>}
            />
            <Route
              path="cart"
              element={<React.Suspense fallback={<><h4>Loading...</h4></>}> <CartPage /> </React.Suspense>}
            />
            <Route
              path="user/*"
              element={<React.Suspense fallback={<><h4>Loading...</h4></>}> <RequireAuth redirectTo="/sign-in"> <DashboardLayout /> </RequireAuth> </React.Suspense>}
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </>
  )
}

export default App
