import * as React from "react";
import { ErrorScreen } from "../error-screen";
import { LoadingBox } from "./loading-box";

type RenderProps = {
  isLoading?: boolean
  isError?: boolean
  loadingPosition?: "top" | "center"
  error?: unknown
  children?: React.ReactNode[] | React.ReactNode | (() => React.ReactNode)
  retry?: Function
  showLoading?: boolean
  loadingComponent?: React.ReactNode
  errorComponent?: React.ReactElement
  showError?: boolean
  hideContent?: boolean
}

/**
 * This component helps handle the internal component rendering logic,
 * for basic cases of when there's an error or when the component is loading
 */
export default React.memo(function Render(props: RenderProps) {
  const {
    error,
    isError = false,
    isLoading = false,
    children,
    showError = true,
    showLoading = true,
    loadingPosition = "center",
    loadingComponent,
    errorComponent,
    hideContent = false,
    retry
  } = props;
  if (isLoading) {
    if (!showLoading) return null
    if (loadingComponent) return loadingComponent
    return <LoadingBox position={loadingPosition} />
  }
  if (isError) {
    if (!showError) return null
    if (errorComponent) return errorComponent
    return <ErrorScreen error={error as any} />
  }

  if(hideContent) return null
  return (
    <React.Fragment>
      {typeof children === "function" ? children() : children}
    </React.Fragment>
  )
});
