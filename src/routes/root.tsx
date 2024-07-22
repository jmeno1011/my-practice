import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar" className="w-[22rem] bg-slate-50 border border-slate-200 border-solid ">
        <div className="flex items-center gap-2 py-4 px-8 border-t border-gray-300 leading-none order-1">
          <div className="h1-content"></div>
          <h1 className="text-base font-medium flex items-center justify-self-start m-0 ">React Router Contacts</h1>
        </div>
        {/* <h1 className="text-base font-medium flex items-center m-0 px-4 py-8 border-t border-gray-300 order-1 leading-none">React Router Contacts</h1> */}
        <div className="px-8 flex items-center gap-2 py-4 border-b border-solid border-gray-300 relative">
          <form id="search-form" role="search" className="relative">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav className="px-8">
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
            <li>
              <a href={`/password`}>password input</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}
