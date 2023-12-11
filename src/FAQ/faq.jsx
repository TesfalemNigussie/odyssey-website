import React from "react";

export const FAQ = (props) => {
  return (
    <>
      <div ref={props.ref} className="relative flex flex-col mt-32 ">
        <img
          className="absolute right-32 object-cover top-32 h-5/6"
          src="/assets/image_2.svg"
          alt=""
        />

        <div className=" bg-gradient-to-b from-primary to-gradient px-20 py-32">
          <div className="flex items-center justify-between gap-36">
            <div className="item-center space-y-12">
              <span className="font-satoshi text-5xl font-bold leading-64 text-left text-white">
                Our Commitment to <br />
                Your Safety and Security
              </span>
              <div className="mt-5 space-y-5">
                <div className="flex gap-5 items-center">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 75 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="37.5" cy="37.5" r="37" stroke="white" />
                    <path
                      d="M55.1818 43.6667V24.7778H28.4545V43.6667H55.1818ZM55.1818 21C56.1936 21 57.1673 21.3967 57.8736 22.1144C58.5991 22.8133 59 23.7767 59 24.7778V43.6667C59 44.6678 58.5991 45.6311 57.8736 46.33C57.1673 47.0478 56.1936 47.4444 55.1818 47.4444H28.4545C26.3355 47.4444 24.6364 45.7444 24.6364 43.6667V24.7778C24.6364 22.6811 26.3355 21 28.4545 21H55.1818ZM20.8182 51.2222H49.4545V55H20.8182C19.8064 55 18.8327 54.6033 18.1264 53.8856C17.4009 53.1867 17 52.2233 17 51.2222V30.4444H20.8182V51.2222Z"
                      fill="white"
                    />
                  </svg>
                  <div className="font-satoshi text-3xl  font-bold leading-40 text-left text-white">
                    Secure Transactions
                  </div>
                </div>
                <br />
                <div className="flex gap-5 items-center">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 83 83"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_46_1564)">
                      <circle cx="41.5" cy="37.5" r="37" stroke="white" />
                      <path
                        d="M38.2 35.1579C42.399 35.1579 45.8 31.7663 45.8 27.5789C45.8 23.3916 42.399 20 38.2 20C34.001 20 30.6 23.3916 30.6 27.5789C30.6 31.7663 34.001 35.1579 38.2 35.1579ZM38.2 23.7895C40.309 23.7895 42 25.4947 42 27.5789C42 29.6632 40.309 31.3684 38.2 31.3684C36.091 31.3684 34.4 29.6821 34.4 27.5789C34.4 25.4758 36.11 23.7895 38.2 23.7895ZM42 50.3158H23V44.6316C23 39.5726 33.127 37.0526 38.2 37.0526C40.1 37.0526 42.722 37.4126 45.249 38.1137C44.679 39.1747 44.337 40.3495 44.299 41.5811C42.437 41.0316 40.309 40.6526 38.2 40.6526C32.557 40.6526 26.61 43.4189 26.61 44.6316V46.7158H42C42 46.7726 42 46.8484 42 46.9053V50.3158ZM58.72 44.6316V41.7895C58.72 39.1368 56.06 37.0526 53.4 37.0526C50.74 37.0526 48.08 39.1368 48.08 41.7895V44.6316C46.94 44.6316 45.8 45.7684 45.8 46.9053V53.5368C45.8 54.8632 46.94 56 48.08 56H58.53C59.86 56 61 54.8632 61 53.7263V47.0947C61 45.7684 59.86 44.6316 58.72 44.6316ZM56.25 44.6316H50.55V41.7895C50.55 40.2737 51.88 39.3263 53.4 39.3263C54.92 39.3263 56.25 40.2737 56.25 41.7895V44.6316Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_46_1564"
                        x="0"
                        y="0"
                        width="83"
                        height="83"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_46_1564"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_46_1564"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <div className="font-satoshi text-3xl font-bold leading-40 text-left text-white">
                    User Verification
                  </div>
                </div>
                <br />
                <div className="flex gap-5 items-center">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 75 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="37.5" cy="37.5" r="37" stroke="white" />
                    <path
                      d="M39.2162 43.6667C39.2162 45.4638 37.773 46.9048 35.973 46.9048C34.173 46.9048 32.7297 45.4476 32.7297 43.6667C32.7297 41.8695 34.173 40.4286 35.973 40.4286C37.773 40.4286 39.2162 41.8857 39.2162 43.6667ZM37.7405 51.7619C37.9351 52.9276 38.3405 54.0124 38.9081 55H26.2432C24.4432 55 23 53.5429 23 51.7619V35.5714C23 33.7743 24.4432 32.3333 26.2432 32.3333H27.8649V29.0952C27.8649 24.6267 31.4973 21 35.973 21C40.4486 21 44.0811 24.6267 44.0811 29.0952V32.3333H45.7027C47.5027 32.3333 48.9459 33.7905 48.9459 35.5714V40.5743C48.4108 40.4933 47.8757 40.4286 47.3243 40.4286C46.773 40.4286 46.2378 40.4933 45.7027 40.5743V35.5714H26.2432V51.7619H37.7405ZM31.1081 32.3333H40.8378V29.0952C40.8378 26.4076 38.6649 24.2381 35.973 24.2381C33.2811 24.2381 31.1081 26.4076 31.1081 29.0952V32.3333ZM51.1189 45.0267L45.2973 50.839L42.7189 48.2648L40.8378 50.1429L45.2973 55L53 47.3095L51.1189 45.0267Z"
                      fill="white"
                    />
                  </svg>

                  <div className="font-satoshi text-3xl  font-bold leading-40 text-left text-white">
                    Data Protection Measures
                  </div>
                </div>
                <br />
                <div className="flex gap-5 items-center">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 75 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="37.5" cy="37.5" r="37" stroke="white" />
                    <path
                      d="M36.2857 27.4091V37.5H26V27.4091H29.4286V20.6818C29.4286 19.7568 30.2 19 31.1429 19C32.0857 19 32.8571 19.7568 32.8571 20.6818V27.4091H36.2857ZM26 40.8636V44.2273C26 46.4136 27.44 48.2636 29.4286 48.97V56H32.8571V48.97C34.8457 48.2636 36.2857 46.4136 36.2857 44.2273V40.8636H26ZM46.5714 27.4091V20.6818C46.5714 19.7568 45.8 19 44.8571 19C43.9143 19 43.1429 19.7568 43.1429 20.6818V27.4091H39.7143V37.5H50V27.4091H46.5714ZM39.7143 40.8636V44.2273C39.7143 46.4136 41.1543 48.2636 43.1429 48.97V56H46.5714V48.97C48.56 48.2636 50 46.4136 50 44.2273V40.8636H39.7143Z"
                      fill="white"
                    />
                  </svg>

                  <div className="font-satoshi text-3xl  font-bold leading-40 text-left text-white">
                    Regular Security Audits
                  </div>
                </div>
                <br />
                <div className="flex gap-5 items-center">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 75 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="37.5" cy="37.5" r="37" stroke="white" />
                    <path
                      d="M50.096 42.5154C50.726 40.9708 51.068 39.3172 51.068 37.5C51.068 36.1916 50.87 34.9378 50.528 33.7748C49.358 34.0474 48.134 34.1927 46.856 34.1927C41.348 34.1927 36.47 31.4488 33.5 27.2148C31.898 31.1399 28.838 34.3381 24.986 36.0826C24.914 36.5369 24.914 37.0275 24.914 37.5C24.914 41.0037 26.2927 44.364 28.7468 46.8415C31.2009 49.319 34.5294 50.7109 38 50.7109C39.89 50.7109 41.708 50.293 43.346 49.5479C44.372 51.5286 44.84 52.5099 44.804 52.5099C41.852 53.5094 39.566 54 38 54C33.644 54 29.486 52.2737 26.426 49.1663C24.554 47.2764 23.168 44.9686 22.394 42.4609H20V34.1927H21.962C23.474 26.6696 30.08 21 38 21C42.32 21 46.478 22.7263 49.556 25.8337C51.842 28.1233 53.372 31.049 54.002 34.1927H56V42.3519V42.3882V42.4609H55.892L49.484 48.4031L39.944 47.3128V44.2781H48.638L50.096 42.5154ZM33.086 37.082C33.626 37.082 34.148 37.3001 34.526 37.6999C34.904 38.0815 35.12 38.6085 35.12 39.1536C35.12 39.6988 34.904 40.2258 34.526 40.6074C34.148 40.989 33.626 41.207 33.086 41.207C31.952 41.207 31.034 40.2985 31.034 39.1536C31.034 38.0088 31.952 37.082 33.086 37.082ZM42.896 37.082C44.03 37.082 44.93 38.0088 44.93 39.1536C44.93 40.2985 44.03 41.207 42.896 41.207C41.762 41.207 40.844 40.2985 40.844 39.1536C40.844 38.6042 41.0602 38.0773 41.445 37.6888C41.8298 37.3003 42.3518 37.082 42.896 37.082Z"
                      fill="white"
                    />
                  </svg>

                  <div className="font-satoshi text-3xl  font-bold leading-40 text-left text-white">
                    Customer Support
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="  bg-warmGray py-20 px-20">
          <div className="font-satoshi text-4xl font-bold leading-16 text-left text-white">
            Get the App Now!
          </div>
          <div className="mt-2 font-satoshi text-base font-medium leading-7 text-left text-white">
            Unlock the Power of Home Services
          </div>
          <div className="flex gap-2 mt-10">
            <img className="object-fill" src="/assets/apple_store.svg" alt="" />
            <img className="object-fill" src="/assets/play_store.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="py-20 px-20 ">
        <div className="font-satoshi text-4xl font-bold leading-16 text-left">
          Explore Our Services
        </div>
        <div className="mt-10 flex gap-10">
          <div className="font-satoshi text-32 font-medium leading-43 text-left px-10 py-2  border rounded-lg border-primary gap-10 text-primary">
            Plumbing
          </div>
          <div className="font-satoshi text-32 font-medium leading-43 text-left px-10 py-2 border rounded-lg border-primary gap-10 text-primary">
            Electrical
          </div>
          <div className="font-satoshi text-32 font-medium leading-43 text-left px-10 py-2 border rounded-lg  gap-10 border-primary text-primary">
            {" "}
            House Cleaning
          </div>
          <div className=" font-satoshi text-32 font-medium leading-43 text-left px-10 py-2 border rounded-lg border-primary gap-10 text-primary">
            House Repairs
          </div>
          <div className=" font-satoshi text-32 font-medium leading-43 text-left px-10 py-2 border rounded-lg border-primary gap-10 text-primary">
            A/C Repair
          </div>
          <div className=" font-satoshi text-32 font-medium leading-43 text-left px-10 py-2 border rounded-lg border-primary gap-10 text-primary">
            Kitchen Cleaning
          </div>
        </div>
        <div className="mt-5 font-satoshi text-31 font-bold leading-42 text-left text-primary">
          See all Services >
        </div>
      </div>

      <footer className="bg-gray-100 text-black py-8 ">
        <div className="container mx-auto flex mt-5 items-center self-center justify-center justify-items-center object-center text-center">
          <div className="w-1/3">
            <h2 className="font-satoshi text-3xl font-bold leading-10">
              Discover
            </h2>
            <br />
            <ul className="font-satoshi text-base font-normal leading-14  space-y-2">
              <li>Become a Jobber</li>
              <li>All Services</li>
              <li>Help</li>
            </ul>
          </div>

          <div className="w-1/3">
            <h2 className="font-satoshi text-3xl font-bold leading-10 ">
              Company
            </h2>
            <br />
            <ul className="font-satoshi text-base font-normal leading-14  space-y-2">
              <li>About Us</li>
              <li>Our Partners</li>
              <li>Terms & Privacy</li>
            </ul>
          </div>

          <div className="w-1/3">
            <h2 className="font-satoshi text-base font-normal leading-10">
              Follow us! We're friendly
            </h2>
            <div className="flex space-x-4 mt-5 items-center justify-center">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 77 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="38.5" cy="38.5" r="38.5" fill="#3B82F6" />
                  <path
                    d="M30.73 20H46.27C52.19 20 57 24.81 57 30.73V46.27C57 49.1158 55.8695 51.845 53.8573 53.8573C51.845 55.8695 49.1158 57 46.27 57H30.73C24.81 57 20 52.19 20 46.27V30.73C20 27.8842 21.1305 25.155 23.1427 23.1427C25.155 21.1305 27.8842 20 30.73 20ZM30.36 23.7C28.5937 23.7 26.8997 24.4017 25.6507 25.6507C24.4017 26.8997 23.7 28.5937 23.7 30.36V46.64C23.7 50.3215 26.6785 53.3 30.36 53.3H46.64C48.4063 53.3 50.1003 52.5983 51.3493 51.3493C52.5983 50.1003 53.3 48.4063 53.3 46.64V30.36C53.3 26.6785 50.3215 23.7 46.64 23.7H30.36ZM48.2125 26.475C48.8258 26.475 49.414 26.7186 49.8477 27.1523C50.2814 27.586 50.525 28.1742 50.525 28.7875C50.525 29.4008 50.2814 29.989 49.8477 30.4227C49.414 30.8564 48.8258 31.1 48.2125 31.1C47.5992 31.1 47.011 30.8564 46.5773 30.4227C46.1436 29.989 45.9 29.4008 45.9 28.7875C45.9 28.1742 46.1436 27.586 46.5773 27.1523C47.011 26.7186 47.5992 26.475 48.2125 26.475ZM38.5 29.25C40.9533 29.25 43.306 30.2246 45.0407 31.9593C46.7754 33.694 47.75 36.0467 47.75 38.5C47.75 40.9533 46.7754 43.306 45.0407 45.0407C43.306 46.7754 40.9533 47.75 38.5 47.75C36.0467 47.75 33.694 46.7754 31.9593 45.0407C30.2246 43.306 29.25 40.9533 29.25 38.5C29.25 36.0467 30.2246 33.694 31.9593 31.9593C33.694 30.2246 36.0467 29.25 38.5 29.25ZM38.5 32.95C37.028 32.95 35.6164 33.5347 34.5756 34.5756C33.5347 35.6164 32.95 37.028 32.95 38.5C32.95 39.972 33.5347 41.3836 34.5756 42.4244C35.6164 43.4653 37.028 44.05 38.5 44.05C39.972 44.05 41.3836 43.4653 42.4244 42.4244C43.4653 41.3836 44.05 39.972 44.05 38.5C44.05 37.028 43.4653 35.6164 42.4244 34.5756C41.3836 33.5347 39.972 32.95 38.5 32.95Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 77 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="38.5" cy="38.5" r="38.5" fill="#3B82F6" />
                  <path
                    d="M39 15C25.8 15 15 25.8193 15 39.1446C15 51.1928 23.784 61.1928 35.256 63V46.1325H29.16V39.1446H35.256V33.8193C35.256 27.7711 38.832 24.4458 44.328 24.4458C46.944 24.4458 49.68 24.9036 49.68 24.9036V30.8554H46.656C43.68 30.8554 42.744 32.7108 42.744 34.6145V39.1446H49.416L48.336 46.1325H42.744V63C48.3994 62.1032 53.5492 59.2061 57.2638 54.8315C60.9783 50.4569 63.0128 44.8931 62.9999 39.1446C62.9999 25.8193 52.2 15 39 15Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 77 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="38.5" cy="38.5" r="38.5" fill="#3B82F6" />
                  <path
                    d="M52.2222 22C53.2241 22 54.185 22.398 54.8935 23.1065C55.602 23.815 56 24.7758 56 25.7778V52.2222C56 53.2241 55.602 54.185 54.8935 54.8935C54.185 55.602 53.2241 56 52.2222 56H25.7778C24.7758 56 23.815 55.602 23.1065 54.8935C22.398 54.185 22 53.2241 22 52.2222V25.7778C22 24.7758 22.398 23.815 23.1065 23.1065C23.815 22.398 24.7758 22 25.7778 22H52.2222ZM51.2778 51.2778V41.2667C51.2778 39.6335 50.629 38.0673 49.4742 36.9125C48.3194 35.7577 46.7531 35.1089 45.12 35.1089C43.5144 35.1089 41.6444 36.0911 40.7378 37.5644V35.4678H35.4678V51.2778H40.7378V41.9656C40.7378 40.5111 41.9089 39.3211 43.3633 39.3211C44.0647 39.3211 44.7373 39.5997 45.2332 40.0956C45.7292 40.5916 46.0078 41.2642 46.0078 41.9656V51.2778H51.2778ZM29.3289 32.5022C30.1705 32.5022 30.9777 32.1679 31.5728 31.5728C32.1679 30.9777 32.5022 30.1705 32.5022 29.3289C32.5022 27.5722 31.0856 26.1367 29.3289 26.1367C28.4823 26.1367 27.6703 26.473 27.0716 27.0716C26.473 27.6703 26.1367 28.4823 26.1367 29.3289C26.1367 31.0856 27.5722 32.5022 29.3289 32.5022ZM31.9544 51.2778V35.4678H26.7222V51.2778H31.9544Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-satoshi text-base font-medium leading-9 ">
            Copyright 2023. All Right Reserved
          </p>
        </div>
      </footer>
    </>
  );
};
