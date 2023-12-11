import React, { useState } from "react";

const homeOwnerItem = [
  {
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="43" cy="43" r="43" fill="#BFDBFE" />
        <path
          d="M66 42.5L60.8727 36.5L61.5136 28.5714L53.8227 26.8571L49.7636 20L42.5 23.2143L35.2364 20L31.1773 26.8571L23.4864 28.5714L24.1273 36.5L19 42.5L24.1273 48.5L23.4864 56.4286L31.1773 58.1429L35.2364 65L42.5 61.7857L49.7636 65L53.8227 58.1429L61.5136 56.4286L60.8727 48.5L66 42.5ZM56.8136 53L51.0455 54.2857L48.0545 59.4286L42.5 57.0714L36.9455 59.4286L33.9545 54.2857L28.1864 53L28.6136 47L24.7682 42.5L28.6136 38L28.1864 32L33.9545 30.7143L36.9455 25.5714L42.5 27.9286L48.0545 25.5714L51.0455 30.7143L56.8136 32L56.3864 38L60.2318 42.5L56.3864 47L56.8136 53ZM52.3273 33.0714L55.3182 36.0714L38.2273 53.2143L29.6818 44.6429L32.6727 41.6429L38.2273 47.2143L52.3273 33.0714Z"
          fill="#3B82F6"
        />
      </svg>
    ),
    name: "Service Request Management",
    description:
      "Homeowners can submit service requests, specifying the type of service needed, preferred date and time, and any additional details. Service providers receive and manage service requests  through the app, streamlining communication.",
  },
  {
    name: "Real-time Messaging",
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="43" cy="43" r="43" fill="#BFDBFE" />
        <path
          d="M57.4 25.5C58.3548 25.5 59.2705 25.8793 59.9456 26.5544C60.6207 27.2295 61 28.1452 61 29.1V50.7C61 51.6548 60.6207 52.5705 59.9456 53.2456C59.2705 53.9207 58.3548 54.3 57.4 54.3H32.2L25 61.5V29.1C25 27.102 26.62 25.5 28.6 25.5H57.4ZM28.6 29.1V52.806L30.706 50.7H57.4V29.1H28.6ZM32.2 34.5H53.8V38.1H32.2V34.5ZM32.2 41.7H48.4V45.3H32.2V41.7Z"
          fill="#3B82F6"
        />
      </svg>
    ),
    description:
      "In-app chat or messaging system for direct communication between homeowners and service providers. Notifications and alerts to keep both parties informed of updates and responses.",
  },
  {
    name: "Reviews and Ratings",
    description:
      "Allow homeowners to leave reviews and ratings for service providers based on their experiences. Encourage service providers to build a positive reputation to attract more clients.",
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="43" cy="43" r="43" fill="#BFDBFE" />
        <path
          d="M36.95 61.5C35.84 61.5 35.1 60.76 35.1 59.65V54.1H27.7C25.665 54.1 24 52.435 24 50.4V28.2C24 26.165 25.665 24.5 27.7 24.5H57.3C59.335 24.5 61 26.165 61 28.2V50.4C61 52.435 59.335 54.1 57.3 54.1H46.015L39.17 60.945C38.8 61.315 38.43 61.5 37.875 61.5H36.95ZM38.8 50.4V56.135L44.535 50.4H57.3V28.2H27.7V50.4H38.8ZM50.455 31.9L47.865 37.45H51.75V44.85H44.35V37.08L46.755 31.9H50.455ZM39.355 31.9L36.765 37.45H40.65V44.85H33.25V37.08L35.655 31.9H39.355Z"
          fill="#3B82F6"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="43" cy="43" r="43" fill="#BFDBFE" />
        <path
          d="M43 28C40.9888 28 39.0599 28.7902 37.6378 30.1967C36.2156 31.6032 35.4167 33.5109 35.4167 35.5C35.4167 37.4891 36.2156 39.3968 37.6378 40.8033C39.0599 42.2098 40.9888 43 43 43C45.0112 43 46.9401 42.2098 48.3622 40.8033C49.7844 39.3968 50.5833 37.4891 50.5833 35.5C50.5833 33.5109 49.7844 31.6032 48.3622 30.1967C46.9401 28.7902 45.0112 28 43 28ZM43 32.2857C43.862 32.2857 44.6886 32.6244 45.2981 33.2272C45.9076 33.83 46.25 34.6475 46.25 35.5C46.25 36.3525 45.9076 37.17 45.2981 37.7728C44.6886 38.3756 43.862 38.7143 43 38.7143C42.138 38.7143 41.3114 38.3756 40.7019 37.7728C40.0924 37.17 39.75 36.3525 39.75 35.5C39.75 34.6475 40.0924 33.83 40.7019 33.2272C41.3114 32.6244 42.138 32.2857 43 32.2857ZM28.9167 34.4286C27.4801 34.4286 26.1023 34.993 25.0865 35.9976C24.0707 37.0023 23.5 38.3649 23.5 39.7857C23.5 41.8 24.6483 43.5357 26.295 44.4571C27.075 44.8857 27.9633 45.1429 28.9167 45.1429C29.87 45.1429 30.7583 44.8857 31.5383 44.4571C32.34 44.0071 33.0117 43.3643 33.51 42.5929C31.9283 40.5571 31.0833 38.0714 31.0833 35.5C31.0833 35.3071 31.0833 35.0929 31.0833 34.9C30.4333 34.6 29.6967 34.4286 28.9167 34.4286ZM57.0833 34.4286C56.3033 34.4286 55.5667 34.6 54.9167 34.9C54.9167 35.0929 54.9167 35.3071 54.9167 35.5C54.9167 38.0714 54.0717 40.5571 52.49 42.5929C52.75 43 53.0317 43.3214 53.3567 43.6429C53.7033 43.9643 54.05 44.2429 54.4617 44.4571C55.2417 44.8857 56.13 45.1429 57.0833 45.1429C58.0367 45.1429 58.925 44.8857 59.705 44.4571C61.3517 43.5357 62.5 41.8 62.5 39.7857C62.5 38.3649 61.9293 37.0023 60.9135 35.9976C59.8977 34.993 58.5199 34.4286 57.0833 34.4286ZM43 47.2857C37.93 47.2857 27.8333 49.7929 27.8333 54.7857V58H58.1667V54.7857C58.1667 49.7929 48.07 47.2857 43 47.2857ZM27.205 48.4643C23.0233 48.9571 17 51.0571 17 54.7857V58H23.5V53.8643C23.5 51.7 24.995 49.9 27.205 48.4643ZM58.795 48.4643C61.005 49.9 62.5 51.7 62.5 53.8643V58H69V54.7857C69 51.0571 62.9767 48.9571 58.795 48.4643ZM43 51.5714C46.315 51.5714 50.02 52.6429 52.165 53.7143H33.835C35.98 52.6429 39.685 51.5714 43 51.5714Z"
          fill="#3B82F6"
        />
      </svg>
    ),
    name: "User-friendly Profiles",
    description:
      "Allow service providers to create detailed profiles showcasing their expertise, qualifications, and work portfolios. Enable homeowners to set up profiles to personalize their experience and manage service requests.",
  },
];

const jobberItem = [
  {
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="43" cy="43" r="43" fill="#BFDBFE" />
        <path
          d="M66 42.5L60.8727 36.5L61.5136 28.5714L53.8227 26.8571L49.7636 20L42.5 23.2143L35.2364 20L31.1773 26.8571L23.4864 28.5714L24.1273 36.5L19 42.5L24.1273 48.5L23.4864 56.4286L31.1773 58.1429L35.2364 65L42.5 61.7857L49.7636 65L53.8227 58.1429L61.5136 56.4286L60.8727 48.5L66 42.5ZM56.8136 53L51.0455 54.2857L48.0545 59.4286L42.5 57.0714L36.9455 59.4286L33.9545 54.2857L28.1864 53L28.6136 47L24.7682 42.5L28.6136 38L28.1864 32L33.9545 30.7143L36.9455 25.5714L42.5 27.9286L48.0545 25.5714L51.0455 30.7143L56.8136 32L56.3864 38L60.2318 42.5L56.3864 47L56.8136 53ZM52.3273 33.0714L55.3182 36.0714L38.2273 53.2143L29.6818 44.6429L32.6727 41.6429L38.2273 47.2143L52.3273 33.0714Z"
          fill="#3B82F6"
        />
      </svg>
    ),
    name: "Increased Visibility",
    description:
      "Service providers can expand their reach and increase visibility to a broader audience, attracting more potential clients than traditional advertising methods.",
  },
  {
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="43" cy="43" r="43" fill="#BFDBFE" />
        <path
          d="M57.4 25.5C58.3548 25.5 59.2705 25.8793 59.9456 26.5544C60.6207 27.2295 61 28.1452 61 29.1V50.7C61 51.6548 60.6207 52.5705 59.9456 53.2456C59.2705 53.9207 58.3548 54.3 57.4 54.3H32.2L25 61.5V29.1C25 27.102 26.62 25.5 28.6 25.5H57.4ZM28.6 29.1V52.806L30.706 50.7H57.4V29.1H28.6ZM32.2 34.5H53.8V38.1H32.2V34.5ZM32.2 41.7H48.4V45.3H32.2V41.7Z"
          fill="#3B82F6"
        />
      </svg>
    ),
    name: "Business Growth Opportunities",
    description:
      "The platform provides service providers with a channel for business growth, allowing them to showcase their skills and attract new customers regularly.",
  },
  {
    name: "Secure and Timely Payments",
    description:
      "Service providers benefit from a secure payment system, receiving timely payments for their services, contributing to better cash flow.",
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="43" cy="43" r="43" fill="#BFDBFE" />
        <path
          d="M36.95 61.5C35.84 61.5 35.1 60.76 35.1 59.65V54.1H27.7C25.665 54.1 24 52.435 24 50.4V28.2C24 26.165 25.665 24.5 27.7 24.5H57.3C59.335 24.5 61 26.165 61 28.2V50.4C61 52.435 59.335 54.1 57.3 54.1H46.015L39.17 60.945C38.8 61.315 38.43 61.5 37.875 61.5H36.95ZM38.8 50.4V56.135L44.535 50.4H57.3V28.2H27.7V50.4H38.8ZM50.455 31.9L47.865 37.45H51.75V44.85H44.35V37.08L46.755 31.9H50.455ZM39.355 31.9L36.765 37.45H40.65V44.85H33.25V37.08L35.655 31.9H39.355Z"
          fill="#3B82F6"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="43" cy="43" r="43" fill="#BFDBFE" />
        <path
          d="M43 28C40.9888 28 39.0599 28.7902 37.6378 30.1967C36.2156 31.6032 35.4167 33.5109 35.4167 35.5C35.4167 37.4891 36.2156 39.3968 37.6378 40.8033C39.0599 42.2098 40.9888 43 43 43C45.0112 43 46.9401 42.2098 48.3622 40.8033C49.7844 39.3968 50.5833 37.4891 50.5833 35.5C50.5833 33.5109 49.7844 31.6032 48.3622 30.1967C46.9401 28.7902 45.0112 28 43 28ZM43 32.2857C43.862 32.2857 44.6886 32.6244 45.2981 33.2272C45.9076 33.83 46.25 34.6475 46.25 35.5C46.25 36.3525 45.9076 37.17 45.2981 37.7728C44.6886 38.3756 43.862 38.7143 43 38.7143C42.138 38.7143 41.3114 38.3756 40.7019 37.7728C40.0924 37.17 39.75 36.3525 39.75 35.5C39.75 34.6475 40.0924 33.83 40.7019 33.2272C41.3114 32.6244 42.138 32.2857 43 32.2857ZM28.9167 34.4286C27.4801 34.4286 26.1023 34.993 25.0865 35.9976C24.0707 37.0023 23.5 38.3649 23.5 39.7857C23.5 41.8 24.6483 43.5357 26.295 44.4571C27.075 44.8857 27.9633 45.1429 28.9167 45.1429C29.87 45.1429 30.7583 44.8857 31.5383 44.4571C32.34 44.0071 33.0117 43.3643 33.51 42.5929C31.9283 40.5571 31.0833 38.0714 31.0833 35.5C31.0833 35.3071 31.0833 35.0929 31.0833 34.9C30.4333 34.6 29.6967 34.4286 28.9167 34.4286ZM57.0833 34.4286C56.3033 34.4286 55.5667 34.6 54.9167 34.9C54.9167 35.0929 54.9167 35.3071 54.9167 35.5C54.9167 38.0714 54.0717 40.5571 52.49 42.5929C52.75 43 53.0317 43.3214 53.3567 43.6429C53.7033 43.9643 54.05 44.2429 54.4617 44.4571C55.2417 44.8857 56.13 45.1429 57.0833 45.1429C58.0367 45.1429 58.925 44.8857 59.705 44.4571C61.3517 43.5357 62.5 41.8 62.5 39.7857C62.5 38.3649 61.9293 37.0023 60.9135 35.9976C59.8977 34.993 58.5199 34.4286 57.0833 34.4286ZM43 47.2857C37.93 47.2857 27.8333 49.7929 27.8333 54.7857V58H58.1667V54.7857C58.1667 49.7929 48.07 47.2857 43 47.2857ZM27.205 48.4643C23.0233 48.9571 17 51.0571 17 54.7857V58H23.5V53.8643C23.5 51.7 24.995 49.9 27.205 48.4643ZM58.795 48.4643C61.005 49.9 62.5 51.7 62.5 53.8643V58H69V54.7857C69 51.0571 62.9767 48.9571 58.795 48.4643ZM43 51.5714C46.315 51.5714 50.02 52.6429 52.165 53.7143H33.835C35.98 52.6429 39.685 51.5714 43 51.5714Z"
          fill="#3B82F6"
        />
      </svg>
    ),
    name: "Direct Communication with Clients",
    description:
      "Real-time messaging features enable direct communication with homeowners, facilitating a clear understanding of project requirements and expectations.",
  },
];

export const Service = (props) => {
  const [selectedType, setSelectedType] = useState(0);

  const selectedStyle =
    "rounded-lg bg-gray-900 py-3 px-20 text-white text-lg text-center border-2 border-solid border-gray-900 rounded-8";
  const unSelectedStyle =
    "rounded-lg bg-white py-3 px-20  text-lg text-black border-2 border-solid border-gray-900 rounded-8";

  return (
    <>
      <div
        ref={props.ref}
        className="mt-32 flex items-center justify-center  flex-col"
      >
        <span className="font-satoshi text-4xl font-bold leading-9 tracking-normal text-left text-primary">
          Oddjobber Features
        </span>
        <span className="mt-5 font-satoshi text-6xl font-bold leading-14 tracking-normal text-left">
          Explore Key Benefits
        </span>
        <div className="flex gap-10 mt-12">
          <div
            onClick={() => setSelectedType(0)}
            className={selectedType === 0 ? selectedStyle : unSelectedStyle}
          >
            Homeowner
          </div>
          <div
            onClick={() => setSelectedType(1)}
            className={selectedType === 1 ? selectedStyle : unSelectedStyle}
          >
            Service Provider
          </div>
        </div>

        <div className="flex  gap-10 mt-12 px-20">
          <div className="container mx-auto p-4 border border-solid border-primary rounded-lg mr-4 py-10">
            <div className="flex items-center mb-4">
              <div className="mr-5">
                {selectedType === 0
                  ? homeOwnerItem[0].icon
                  : jobberItem[0].icon}
              </div>
              <div>
                {/* Text 1 */}
                <p className="font-satoshi text-4xl font-bold leading-9 tracking-normal text-left">
                  {selectedType === 0
                    ? homeOwnerItem[0].name
                    : jobberItem[0].name}
                </p>
              </div>
            </div>

            <div className="flex items-center text-2xl font-satoshi  font-normal leading-10 tracking-normal text-left">
              {selectedType === 0
                ? homeOwnerItem[0].description
                : jobberItem[0].description}
            </div>
          </div>

          <div className="container mx-auto p-4 border  border-solid border-primary rounded-lg mr-4 py-10">
            <div className="flex items-center mb-4">
              <div className="mr-5">
                {selectedType === 0
                  ? homeOwnerItem[1].icon
                  : jobberItem[1].icon}
              </div>
              <div>
                <p className="font-satoshi text-3xl font-bold leading-9 tracking-normal text-left">
                  {selectedType === 0
                    ? homeOwnerItem[1].name
                    : jobberItem[1].name}
                </p>
              </div>
            </div>

            <div className="flex items-center font-satoshi text-2xl font-normal leading-10 tracking-normal text-left">
              {selectedType === 0
                ? homeOwnerItem[1].description
                : jobberItem[1].description}
            </div>
          </div>
        </div>

        <div className="flex gap-10 mt-12 px-20">
          <div className="container mx-auto p-4 border border-solid border-primary rounded-lg mr-4 py-10">
            <div className="flex items-center mb-4">
              <div className="mr-5">
                {selectedType === 0
                  ? homeOwnerItem[2].icon
                  : jobberItem[2].icon}
              </div>
              <div>
                <p className="font-satoshi text-3xl font-bold leading-9 tracking-normal text-left">
                  {selectedType === 0
                    ? homeOwnerItem[2].name
                    : jobberItem[2].name}
                </p>
              </div>
            </div>

            <div className="flex items-center font-satoshi text-2xl font-normal leading-10 tracking-normal text-left">
              {selectedType === 0
                ? homeOwnerItem[2].description
                : jobberItem[2].description}
            </div>
          </div>

          <div className="container mx-auto p-4 border  border-solid border-primary rounded-lg mr-4 py-10">
            <div className="flex items-center mb-4">
              <div className="mr-5">
                {selectedType === 0
                  ? homeOwnerItem[3].icon
                  : jobberItem[3].icon}
              </div>
              <div>
                <p className="font-satoshi text-3xl font-bold leading-9 tracking-normal text-left">
                  {selectedType === 0
                    ? homeOwnerItem[3].name
                    : jobberItem[3].name}
                </p>
              </div>
            </div>

            <div className="flex items-center font-satoshi text-2xl font-normal leading-10 tracking-normal text-left">
              {selectedType === 0
                ? homeOwnerItem[3].description
                : jobberItem[3].description}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 flex justify-between gap-40 px-20">
        <div className="w-1/2">
          <div className="font-Satoshi text-6xl font-bold leading-59 tracking-normal text-left">
            Getting Started
            <br /> as a Homeowner
          </div>

          <div className=" mt-5 font-Satoshi text-3xl font-normal leading-37 tracking-normal text-left">
            How to get started as a Cleaner
          </div>

          <div className=" mt-10 border border-primary rounded-lg text-3xl  px-10 py-4 text-center flex space-x-10 items-center">
            <div class="w-20 h-20 bg-blue-200 rounded-full flex text-primary items-center justify-center text-Satoshi  font-bold leading-36 tracking-normal text-left">
              1
            </div>
            <div className="font-Satoshi text-center  font-normal leading-36 tracking-normal ">
              Create a Account
            </div>
          </div>
          <div className=" mt-10 border border-primary rounded-lg text-3xl  px-10 py-4 text-center flex space-x-10 items-center">
            <div class="w-20 h-20 bg-blue-200 rounded-full flex text-primary items-center justify-center text-Satoshi  font-bold leading-36 tracking-normal text-left">
              2
            </div>
            <div className="font-Satoshi text-center  font-normal leading-36 tracking-normal ">
              Search for Service
            </div>
          </div>
          <div className=" mt-10 border border-primary rounded-lg text-3xl  px-10 py-4 text-center flex space-x-10 items-center">
            <div class="w-20 h-20 bg-blue-200 rounded-full flex text-primary items-center justify-center text-Satoshi  font-bold leading-36 tracking-normal text-left">
              3
            </div>
            <div className="font-Satoshi text-center  font-normal leading-36 tracking-normal ">
              Explore Provides
            </div>
          </div>
          <div className=" mt-10 border border-primary rounded-lg text-3xl  px-10 py-4 text-center flex space-x-10 items-center">
            <div class="w-20 h-20 bg-blue-200 rounded-full flex text-primary items-center justify-center text-Satoshi  font-bold leading-36 tracking-normal text-left">
              4
            </div>
            <div className="font-Satoshi text-center  font-normal leading-36 tracking-normal ">
              Send Request Service
            </div>
          </div>
        </div>
        <div className="">
          <img className="" src="/assets/services.svg" alt="" />
        </div>
      </div>
      <div className="mt-32 flex justify-between gap-40 px-20">
        <div className="">
          <img className="" src="/assets/services.svg" alt="" />
        </div>
        <div className="w-1/2">
          <div className="font-Satoshi text-6xl font-bold leading-59 tracking-normal text-left">
            Getting Started
            <br /> as a Jobber
          </div>

          <div className=" mt-5 font-Satoshi text-3xl font-normal leading-37 tracking-normal text-left">
            How to get started as a Service Provider
          </div>

          <div className=" mt-10 border border-primary rounded-lg text-3xl  px-10 py-4 text-center flex space-x-10 items-center">
            <div class="w-20 h-20 bg-blue-200 rounded-full flex text-primary items-center justify-center text-Satoshi  font-bold leading-36 tracking-normal text-left">
              1
            </div>
            <div className="font-Satoshi text-center  font-normal leading-36 tracking-normal ">
              Create a Account
            </div>
          </div>
          <div className=" mt-10 border border-primary rounded-lg text-3xl  px-10 py-4 text-center flex space-x-10 items-center">
            <div class="w-20 h-20 bg-blue-200 rounded-full flex text-primary items-center justify-center text-Satoshi  font-bold leading-36 tracking-normal text-left">
              2
            </div>
            <div className="font-Satoshi text-center  font-normal leading-36 tracking-normal ">
              Identity Verification
            </div>
          </div>
          <div className=" mt-10 border border-primary rounded-lg text-3xl  px-10 py-4 text-center flex space-x-10 items-center">
            <div class="w-20 h-20 bg-blue-200 rounded-full flex text-primary items-center justify-center text-Satoshi  font-bold leading-36 tracking-normal text-left">
              3
            </div>
            <div className="font-Satoshi text-center  font-normal leading-36 tracking-normal ">
              Add a Service
            </div>
          </div>
          <div className=" mt-10 border border-primary rounded-lg text-3xl  px-10 py-4 text-center flex space-x-10 items-center">
            <div class="w-20 h-20 bg-blue-200 rounded-full flex text-primary items-center justify-center text-Satoshi  font-bold leading-36 tracking-normal text-left">
              4
            </div>
            <div className="font-Satoshi text-center  font-normal leading-36 tracking-normal ">
              Complete Profile
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
