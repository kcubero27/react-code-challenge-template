import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import { toHaveNoViolations } from "jest-axe";
import { server } from "@tests/api/node";
import fetch from "node-fetch";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
global.fetch = fetch;

expect.extend(matchers);
expect.extend(toHaveNoViolations);

beforeAll(() => {
  server.listen({
    // @see https://mswjs.io/docs/api/setup-worker/start#onunhandledrequest
    // Any request not intercepted by the service will print a console error
    onUnhandledRequest(req) {
      console.error("Found an unhandled %s request to %s", req.method, req.url.href);
    },
  });
});
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => {
  server.close();
});
