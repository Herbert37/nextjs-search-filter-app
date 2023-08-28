'use client'; // This is a client component
import React, { lazy, useEffect } from 'react';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "js/reducer";
const Navigation = lazy(() => import('@/components/Navigation'));
const GetItems = lazy(() => import('@/components/GetItems'));
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Search Filter Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  function setReduxStore() {
    const store = configureStore({
      reducer: rootReducer
    });
    return store;
  }

  return (
    <html lang="en">
      <body>
        <Provider store={setReduxStore()}>
          <Navigation />
          <GetItems />
          {children}
        </Provider>
      </body>
    </html>
  )
}
