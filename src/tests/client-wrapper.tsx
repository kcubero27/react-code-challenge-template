import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { type ReactElement, type ReactNode } from "react";
import { render, type RenderResult } from "@testing-library/react";

const createTestQueryClient = (): QueryClient =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

export function getClientWrapper(): ({ children }: { children: ReactNode }) => ReactNode {
  const testQueryClient = createTestQueryClient();

  // TODO
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
  );
}

export function renderWithWrapper(ui: ReactElement): RenderResult {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <MemoryRouter>
      <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
    </MemoryRouter>
  );

  return {
    ...result,
    rerender: (rerenderUi: ReactElement) => {
      rerender(
        <MemoryRouter>
          <QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>
        </MemoryRouter>
      );
    },
  };
}
