import classNames from 'classnames';
import React, { ReactElement } from 'react';
import * as css from './TooltipContainer.module.css';

// TODO move into another file? unsure where I would put such helper types
export type WithChildren<T = {}> = T & { children?: React.ReactNode };

export type TooltipContainerProps = WithChildren<{
  className?: string;
}>;

const TooltipContainer = ({
  children,
  className,
}: TooltipContainerProps): ReactElement => {
  return <div className={classNames(css.root, className)}>{children}</div>;
};

export default TooltipContainer;