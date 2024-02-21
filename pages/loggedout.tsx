import Link from 'next/link';
import { FC, useEffect } from 'react';

const LoggedOutPage: FC = () => {
  useEffect(() => {
    logoutProcedure();
  }, []);

  return (
    <div className="flex h-screen bg-slate-300 dark:bg-slate-800">
      <div className="flex flex-col m-auto items-center justify-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Logged Out</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">You should now be logged out.</p>
        <Link href="/" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Go to Home&nbsp;
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};


function logoutProcedure() {
    var outcome
    var u
    var m = "You should be logged out now.";
    // IE has a simple solution for it - API:
    try { outcome = document.execCommand("ClearAuthenticationCache") }catch(e){}
    // Other browsers need a larger solution - AJAX call with special user name - 'logout'.
    if (!outcome) {
        // Let's create an xmlhttp object
        outcome = (function(x){
            if (x) {
                // the reason we use "random" value for password is 
                // that browsers cache requests. changing
                // password effectively behaves like cache-busting.
                // Here I also want characters not allowed in a potential username system, hence the "#@^%&". An attacker may try all kinds of credentials. But I don't want to legitmate users to be unknowingly running legitmate credentials
                x.open("HEAD", 
                    "/", 
                    true, 
                    "#@^%&_" + (new Date()).getTime().toString(), 
                    (new Date()).getTime().toString()
                )
                if (x && "setRequestHeader" in x) {
                    x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                }
                x.send("")
                // x.abort()
                return 1 // this is **speculative** "We are done." 
            } else {
                return
            }
        })(window.XMLHttpRequest ? new window.XMLHttpRequest() : ( (window as any).ActiveXObject ? new (window as any).ActiveXObject("Microsoft.XMLHTTP") : u ))
    }
    if (!outcome) {
        m = "Your browser is too old or too weird to support log out functionality. Close all windows and restart the browser."
        alert(m)
    }
    // return !!outcome
}



export default LoggedOutPage;