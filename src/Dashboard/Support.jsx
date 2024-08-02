import message from "./../assets/messages.svg";
import inbox from "./../assets/inbox.svg";
import invoice from "./../assets/file - text.svg";
const Support = () => {
  return (
    <div className="mt-6">
      <span className="uppercase font-normal text-xs text-[#98A2B3]">
        Support
      </span>

      <div className="flex flex-col gap-1 mt-4">
        <div className="hover:bg-blue-50 rounded-xl duration-300  flex items-center   gap-3 px-3 py-2">
          <span>
            <img src={message} />
          </span>
          <span className="menuTitle">Message</span>
        </div>
        <div className="hover:bg-blue-50 rounded-xl duration-300  flex items-center   gap-3 px-3 py-2">
          <span>
            <img src={inbox} />
          </span>
          <span className="menuTitle">Inbox</span>
        </div>
        <div className="hover:bg-blue-50 rounded-xl duration-300  flex items-center   gap-3 px-3 py-2">
          <span>
            <img src={invoice} />
          </span>
          <span className="menuTitle">Invoice</span>
        </div>
      </div>
    </div>
  );
};

export default Support;
