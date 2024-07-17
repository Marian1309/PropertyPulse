'use client';

import type { FC } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastProvider: FC = () => {
  return <ToastContainer autoClose={2000} />;
};

export default ToastProvider;
