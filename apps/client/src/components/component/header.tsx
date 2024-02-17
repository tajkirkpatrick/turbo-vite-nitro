import { Button } from "@/components/ui/button";

interface HeaderProps {
  title?: string;
}

function Header({ title = "Home" }: HeaderProps) {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 lg:h-[50px]">
      <a className="lg:hidden" href="/">
        <Package2Icon className="h-6 w-6" />
        <span className="sr-only">Home</span>
      </a>
      <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
      <a className="ml-auto" href="/login">
        <Button size="sm" variant="outline">
          Login
        </Button>
      </a>
    </header>
  );
}

function Package2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

export default Header;
