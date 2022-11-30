import { render } from "@testing-library/react";
import ContextProvider from "../context/ContextProvider";

const renderWithContext = (ui:any, options?:any) =>
  render(ui, { wrapper: ContextProvider, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithContext as render };