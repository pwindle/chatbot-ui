import { IconCheck, IconUser, IconX } from '@tabler/icons-react';
import { FC, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { SidebarButton } from '@/components/Sidebar/SidebarButton';

interface Props {
  onLogout: () => void;
}

export const Logout: FC<Props> = ({ onLogout }) => {
  const [isConfirming, setIsConfirming] = useState<boolean>(false);

  const { t } = useTranslation('sidebar');

  const handleLogout = () => {
    logoutProcedure();
    setIsConfirming(false);
  };

  return isConfirming ? (
    <div className="flex w-full cursor-pointer items-center rounded-lg py-3 px-3 hover:bg-gray-500/10">
      <IconUser size={18} />

      <div className="ml-3 flex-1 text-left text-[12.5px] leading-3 text-white">
        {t('Are you sure?')}
      </div>

      <div className="flex w-[40px]">
        <IconCheck
          className="ml-auto mr-1 min-w-[20px] text-neutral-400 hover:text-neutral-100"
          size={18}
          onClick={(e) => {
            e.stopPropagation();
            handleLogout();
          }}
        />

        <IconX
          className="ml-auto min-w-[20px] text-neutral-400 hover:text-neutral-100"
          size={18}
          onClick={(e) => {
            e.stopPropagation();
            setIsConfirming(false);
          }}
        />
      </div>
    </div>
  ) : (
    <SidebarButton
      text={t('Logout')}
      icon={<IconUser size={18} />}
      onClick={() => setIsConfirming(true)}
    />
  );
};

// Taken from:
// https://stackoverflow.com/questions/233507/how-to-log-out-user-from-web-site-using-basic-authentication
// https://stackoverflow.com/a/14329930
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
                x.open("HEAD", location.href, true, "#@^%&_35f3a2fc-c172-480f-86c1-d896d9a9a0fc" + self.crypto.randomUUID() + (new Date()).getTime().toString(), "#@^%&_309481b9-6662-46eb-b627-69df798ca6a7" + (new Date()).getTime().toString())
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