import { Form, Link, Outlet, useLoaderData } from "react-router-dom";
import { Icontact } from "../types/contact";
import { createContact, getContacts } from "../contacts";

export default function Root() {
  const { contacts } = useLoaderData() as { contacts: Icontact[] };
  return (
    <>
      <div
        id="sidebar"
        className="w-[22rem] bg-slate-50 border border-slate-200 border-solid "
      >
        <div className="flex items-center gap-2 py-4 px-8 border-t border-gray-300 leading-none order-1">
          <div className="h1-content"></div>
          <h1 className="text-base font-medium flex items-center justify-self-start m-0 ">
            React Router Contacts
          </h1>
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
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav className="px-8">
          {contacts && contacts.length ? (
            <ul>
              {contacts.map((contact: Icontact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
          {/* <nav className="px-8"> */}
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
            <li>
              <a href={`/env-confirm`}>env-confirm</a>
            </li>
          </ul>
          {/* </nav> */}
        </nav>
      </div>
      <div className="flex-1 px-16 py-8 w-full">
        <Outlet />
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const contacts = await getContacts();
  return contacts;
}

// eslint-disable-next-line react-refresh/only-export-components
export const action = async () => {
  const contact = await createContact();
  return { contact };
};
