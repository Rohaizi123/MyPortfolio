import Link from "next/link";

function Navbar() {
  return (
    <header className="text-gray-600 body-font bg-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Rohaizi Mohamed</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 hover:text-gray-900">Home</a>
          </Link>
          <Link href="/experience">
            <a className="mr-5 hover:text-gray-900">Experience</a>
          </Link>
          <Link href="/skill">
            <a className="mr-5 hover:text-gray-900">Skills</a>
          </Link>
          <Link href="#">
            <a className="mr-5 hover:text-gray-900">Projects</a>
          </Link>
          <Link href="#">
            <a className="mr-5 hover:text-gray-900">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
