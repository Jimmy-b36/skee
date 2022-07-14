import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Nav = (props: any) => {
  const [user, setUser] = useState(null);
  const [loginType, setLoginType] = useState('');
  const [error, setError] = useState(false);
  const { query } = useRouter();
  query.id = '2';

  const fetchUser = async (type: string) => {
    await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(type),
    })
      .then(res => res.json())
      .then(data => setUser(data[0]));
  };
  const onRadioChange = (e: any) => {
    setLoginType(e.target.value);
  };

  const logout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => setUser(null));
  };

  const loginHandler = async e => {
    e.preventDefault();
    const loginData: any = {};
    for (const v of e.target.elements) {
      if (v.checked) loginData[v.name] = v.value;
      loginData[v.name] = v.value;
    }
    loginData.userType = loginType;

    await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(loginData),
    })
      .then(res => res.json())
      .then(data => {
        if (data === 'login Error') {
          setError(true);
        } else {
          setUser(data);
          setError(false), e.target.reset();
        }
      });
  };

  useEffect(() => {
    fetchUser('pro');
  }, [user]);

  // console.log(query.id);
  return (
    <div className="navbar bg-base-100 h-24">
      <div className="navbar-start">
        <div className="dropdown">
          {/* // * this is the responsive Nav */}
          {/* //TODO: update responsive nav text size */}
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link href="/mountains">
              <li>
                <a>Mountains</a>
              </li>
            </Link>
            <li tabIndex={0}>
              <a className="justify-between">
                Dev Links
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <Link href="/faq">
                  <li>
                    <a>FAQ</a>
                  </li>
                </Link>
                <Link href="/userprofile">
                  <li>
                    <a>User Profile</a>
                  </li>
                </Link>
                <Link href="/pro">
                  <li>
                    <a>Pro Profile</a>
                  </li>
                </Link>
                <Link href="/booking">
                  <li>
                    <a>Booking</a>
                  </li>
                </Link>
              </ul>
            </li>
            <Link href="/instructors">
              <li>
                <a>Instructors</a>
              </li>
            </Link>
          </ul>
        </div>
        {/* //* this is the normal Nav */}
        <Link href="/">
          <a className="btn btn-ghost normal-case text-2xl hover:bg-info hover:rounded-lg">
            Skee 🎿
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <Link href="/mountains">
            <li className="hover:bg-info hover:rounded-lg">
              <a className="text-2xl">Mountains</a>
            </li>
          </Link>
          <li tabIndex={0}>
            <a className="hover:bg-info hover:rounded-lg  text-2xl">
              Dev Links
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <Link href="/faq">
                <li className="bg-info">
                  <a className="text-2xl">FAQ</a>
                </li>
              </Link>
              <Link href="/userprofile">
                <li className="bg-info">
                  <a className="text-2xl">User Profile</a>
                </li>
              </Link>

              <Link href="/proprofile/[pid]">
                <li className="bg-info">
                  <a className="text-2xl">Pro Profile</a>
                </li>
              </Link>
              <Link href="/booking">
                <li className="bg-info">
                  <a>Booking</a>
                </li>
              </Link>
            </ul>
          </li>
          <Link href="/instructors/1">
            <li className="hover:bg-info hover:rounded-lg">
              <a className="text-2xl">Instructors</a>
            </li>
          </Link>
        </ul>
      </div>
      {/* //* signed in propery used here */}
      {!user ? (
        <div className="navbar-end text-xl">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1">
              Login/signup
            </label>
            <div
              tabIndex={0}
              className="dropdown-content card card-compact w-auto p-2 shadow bg-primary text-primary-content "
            >
              <div className="card-body pr-10">
                <form onSubmit={loginHandler} method="post">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Pro</span>
                      <input
                        onChange={onRadioChange}
                        type="radio"
                        value="proChecked"
                        name="userType"
                        className="radio checked:bg-red-500"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Client</span>
                      <input
                        onChange={onRadioChange}
                        type="radio"
                        value="clientChecked"
                        name="userType"
                        className="radio checked:bg-blue-500"
                      />
                    </label>
                  </div>

                  <div className="form-control mb-2">
                    <label className="input-group">
                      <span className="w-full">Email</span>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="info@site.com"
                        className="input input-bordered "
                      />
                    </label>
                  </div>
                  <div className="form-control mb-2">
                    <label className="input-group">
                      <span>Password</span>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        placeholder="password"
                        className="input input-bordered"
                      />
                    </label>
                  </div>
                  {error ? <div className="text-red-500">{error}</div> : null}
                  <button
                    type="submit"
                    className="btn bg-transparent hover:bg-success text-xl w-full"
                  >
                    Sign in
                  </button>
                </form>
                <Link href="/signup">
                  <a className="btn bg-transparent hover:bg-success text-xl">
                    Sign up
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="navbar-end ">
            <p className="text-3xl mr-2">{user.firstName}</p>
            <p
              className="btn bg-transparent hover:bg-success text-xl"
              onClick={logout}
            >
              logout
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Nav;
