import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Index from 'components/ApplicationArea/ApplicationLayout';

import 'helpers/ErrorBoundary';
import './App.less';
import 'antd/dist/antd.css';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      {/* custom history does not work with custom history in react router v5 */}
      <BrowserRouter basename="/bi">
        <Index />
      </BrowserRouter>
    </ErrorBoundary>
  );
};
export default App;
