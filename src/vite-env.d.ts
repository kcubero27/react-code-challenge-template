// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />
import { type SetupWorkerApi } from "msw";

declare global {
  interface Window {
    msw: { rest: any; worker: SetupWorkerApi };
  }
}
