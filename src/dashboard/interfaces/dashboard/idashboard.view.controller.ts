import React from 'react';

export interface IDashboardViewController {
  globalContext: any;
  userAccount: any;
  setUserAccount: React.Dispatch<React.SetStateAction<any>>;
  // isNetworkAvailable: boolean;
}
