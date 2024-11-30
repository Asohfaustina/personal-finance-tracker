export type ErrorBoundryState = {
  errorInfo: React.ErrorInfo,
  error: Error,
  hasError: boolean
}

export type ErrorBoundryProps = {
  children: React.ReactNode
  user?: string
}
