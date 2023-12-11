import React from "react";

export const Home = (props) => {
  return (
    <div
      ref={props.ref}
      className="bg-gradient-to-b from-primary to-gradient py-10"
    >
      <div className="flex gap-40 justify-center">
        <div className="px-20">
          <div className="font-satoshi font-bold leading-16 tracking-normal text-left text-white  text-5xl">
            Your One-Stop Solution <br /> for Home Repairs and <br />
            Maintenance
          </div>
          <div className="mt-10 font-satoshi text-lg font-normal leading-7 tracking-normal text-left text-white ">
            Experience the convenience of finding skilled service providers,{" "}
            <br />
            scheduling repairs, and maintaining your home, all in one place.
            <br />
            With our app, you can say goodbye to home-related worries and <br />
            hello to hassle-free living.
          </div>
          <div className="flex gap-5 mt-10">
            <div className="rounded-lg bg-gray-900  py-5 px-20  text-white">
              Download Android
            </div>
            <div className="rounded-lg bg-white  py-5 px-20  text-black">
              Download IOS
            </div>
          </div>
          <br />
          <div className="flex bg-white bg-opacity-10 left-10 p-[18px 10px 18px 10px] rounded-2xl space-x-2 mt-10">
            <div className="flex items-center gap-3 p-10">
              <div className="flex w-10 h-10">
                <img src="/assets/hammer.svg" />
              </div>
              <div>
                <p className="font-satoshi text-base font-normal leading-7 tracking-normal text-left text-white">
                  Homes Repaired
                </p>
                <p className="font-satoshi text-3xl font-bold leading-9 tracking-normal text-left text-white">
                  700,000+
                </p>
              </div>
            </div>
            <div className="bg-white my-5 border border-solid border-white h-auto" />
            <div className="flex items-center gap-3 p-10">
              <div className="flex w-10 h-10">
                <img src="/assets/broomstick.svg" />
              </div>
              <div>
                <p className="font-satoshi text-base font-normal leading-7 tracking-normal text-left text-white">
                  Home Cleaned
                </p>
                <p className="font-satoshi text-3xl font-bold leading-9 tracking-normal text-left text-white">
                  700,000+
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img className="" src="/assets/home_image.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
