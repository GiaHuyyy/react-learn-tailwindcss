import {
  bellIcon,
  dropboxIcon,
  microsoftIcon,
  pinterestIcon,
  searchIcon,
} from "../icon";

function AccountList() {
  return (
    <div className="rounded-[36px] bg-white p-20 shadow-[0px_54px_90px_-40px_rgba(251,132,132,0.25)]">
      {/* Top */}
      <div className="flex items-center justify-between">
        <label className="flex h-[59px] w-[283px] select-none items-center gap-[8px] overflow-hidden rounded-lg border-[1px] border-[#C5C5F8]">
          <img className="pl-4" src={searchIcon} alt="" />
          <input
            className="h-full flex-1 outline-none"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
        </label>

        <div className="flex items-center gap-x-8">
          <img
            className="cursor-pointer hover:opacity-80"
            src={bellIcon}
            alt=""
          />
          <div className="flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-[50%] bg-[#8598FC] text-3xl font-medium text-white hover:opacity-90">
            IG
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mt-10">
        <h2 className="text-[32px] font-bold">Account</h2>
        <div className="mt-5">
          {/* Item 1 */}
          <div className="duration-400 group mt-2 flex items-center justify-between rounded-3xl px-5 py-[27px] transition-all hover:bg-[#FAF2FE]">
            <div className="flex items-center gap-x-4">
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[50%] bg-white p-4">
                <img src={dropboxIcon} alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Dropbox</h3>
                <p className="mt-1 text-base font-medium opacity-70">
                  dropbox.com
                </p>
              </div>
            </div>
            <p className="text-base font-medium">24 accounts</p>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-evenly rounded-[50%] bg-white">
              <span className="group h-1 w-1 rounded-[50%] bg-[#ccc] group-hover:bg-black"></span>
              <span className="h-1 w-1 rounded-[50%] bg-[#ccc] group-hover:bg-black"></span>
              <span className="h-1 w-1 rounded-[50%] bg-[#ccc] group-hover:bg-black"></span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="duration-400 group mt-2 flex items-center justify-between rounded-3xl px-5 py-[27px] transition-all hover:bg-[#FAF2FE]">
            <div className="flex items-center gap-x-4">
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[50%] bg-white p-4">
                <img src={pinterestIcon} alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Pinterest</h3>
                <p className="mt-1 text-base font-medium opacity-70">
                  pinterest.com
                </p>
              </div>
            </div>
            <p className="text-base font-medium">3 accounts</p>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-evenly rounded-[50%] bg-white">
              <span className="group h-1 w-1 rounded-[50%] bg-[#ccc] group-hover:bg-black"></span>
              <span className="h-1 w-1 rounded-[50%] bg-[#ccc] group-hover:bg-black"></span>
              <span className="h-1 w-1 rounded-[50%] bg-[#ccc] group-hover:bg-black"></span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="duration-400 group mt-2 flex items-center justify-between rounded-3xl px-5 py-[27px] transition-all hover:bg-[#FAF2FE]">
            <div className="flex items-center gap-x-4">
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[50%] bg-white p-4">
                <img src={microsoftIcon} alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Microsoft</h3>
                <p className="mt-1 text-base font-medium opacity-70">
                  microsoft.com
                </p>
              </div>
            </div>
            <p className="text-base font-medium">19 accounts</p>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-evenly rounded-[50%] bg-white">
              <span className="group h-1 w-1 rounded-[50%] bg-[#ccc] group-hover:bg-black"></span>
              <span className="h-1 w-1 rounded-[50%] bg-[#ccc] group-hover:bg-black"></span>
              <span className="h-1 w-1 rounded-[50%] bg-[#ccc] group-hover:bg-black"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountList;
