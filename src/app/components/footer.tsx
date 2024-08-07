export default function Footer() {
  return (
    <main>
      <footer className="sticky top-100 my-4">
        {/*  bg-white rounded-lg shadow dark:bg-gray-900 */}
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://github.com/AroobaSiddiqi" target="_blank" className="hover:underline hover:text-gray-200">
                Arooba Siddiqi
              </a>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-gray-200 me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
