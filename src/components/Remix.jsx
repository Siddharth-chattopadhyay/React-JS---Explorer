import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@r";
import {HeroUIProvider} from "@heroui/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <HeroUIProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </HeroUIProvider>
      </body>
    </html>
  );
}