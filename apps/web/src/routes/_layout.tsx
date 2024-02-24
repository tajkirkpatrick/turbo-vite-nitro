import { createFileRoute, Outlet } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <main className="h-screen w-screen">
        <div className="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[300px_1fr]">
          <div className="hidden bg-gray-100/40 dark:bg-gray-800/40 lg:block">
            <div className="flex h-full flex-col">
              <nav className="flex h-[50px] items-center border-b px-4">
                <a className="flex items-center gap-2 font-semibold" href="/">
                  {/* <Package2Icon class="h-6 w-6" /> */}
                  <span className="">Acme Inc</span>
                </a>
              </nav>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                  <a
                    className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                    href="#"
                  >
                    {/* <CalendarIcon class="h-4 w-4" /> */}
                    Upcoming Events
                  </a>
                  <a
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    {/* <PlayIcon class="h-4 w-4" /> */}
                    Live Betting
                  </a>
                  <a
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    {/* <CheckCircleIcon class="h-4 w-4" /> */}
                    My Bets
                  </a>
                  <a
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    {/* <SettingsIcon class="h-4 w-4" /> */}
                    Account Settings
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <Header />
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 lg:h-[50px]">
      <a className="lg:hidden" href="/">
        {/* <Package2Icon class="h-6 w-6" /> */}
        <span className="sr-only">Home</span>
      </a>
      <h1 className="text-lg font-semibold md:text-2xl">Hello World!</h1>
      <a className="ml-auto" href="/login">
        <Button size="sm" variant="outline">
          {" "}
          Login{" "}
        </Button>
      </a>
    </header>
  );
}
