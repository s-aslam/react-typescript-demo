import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface IRoutesConfig {
  id: string;
  name: string;
  description?: string;
  path: string;
  exact: boolean;
  isPrivate?: boolean;
  isStatic?: boolean;
  component?:
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>;
};