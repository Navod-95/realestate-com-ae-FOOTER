"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-custom-green md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
               Real estate
                </p>
                <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20"
                      viewBox="0 0 23 23"
                      fill="currentColor"
                      id="facebook"
                    >
                      <path d="M17.9902344,1.5957031c-1.0087891-0.1067505-2.0227051-0.1586304-3.0371094-0.1552734C11.5898438,1.4404297,9.5,3.5819702,9.5,7.0302734v2.3408203H6.6748047c-0.276001-0.0001831-0.4998779,0.2234497-0.5,0.4994507v3.8511353c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5H9.5v7.71875c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5h3.9780884c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507v-7.7192993h2.8164673c0.2512207-0.000061,0.463501-0.1864014,0.4960938-0.4355469l0.4970703-3.8505859c0.0357056-0.2736816-0.1572266-0.5245361-0.4309692-0.5602417c-0.0216064-0.0028076-0.043335-0.0042114-0.0651245-0.0042114h-3.3135376V7.4121094c0-0.9697266,0.1953125-1.375,1.4082031-1.375l2.0390625-0.0009766c0.276001,0.0001221,0.4998169-0.2234497,0.5-0.4994507V2.0917969C18.4248657,1.8408203,18.2390137,1.6286621,17.9902344,1.5957031z M17.4248047,5.0361328l-1.5390625,0.0009766c-2.1582031,0-2.4082031,1.3554688-2.4082031,2.375v2.4590454c-0.0001221,0.2759399,0.2234497,0.4998169,0.4994507,0.499939h3.2456665l-0.3681641,2.8505859h-2.8769531c-0.276001-0.0001221-0.4998169,0.2234497-0.5,0.4994507v7.7192993H10.5v-7.71875c0.0001831-0.276001-0.2234497-0.4998169-0.4993896-0.5H7.1748047v-2.8505859H10c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507V7.0302734c0-2.8740234,1.664978-4.5898438,4.453125-4.5898438c1.0087891,0,1.9199219,0.0546875,2.4716797,0.1025391V5.0361328z"></path>
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 13333.33 13333.33"
                      fill="currentColor"
                      id="instagram"
                    >
                      <path d="M8507.8 3309.65l-3682.26 0c-822.87,0 -1496.35,673.46 -1496.35,1496.35l0 3721.33c0,822.88 673.47,1496.35 1496.35,1496.35l3682.26 0c822.88,0 1496.35,-673.47 1496.35,-1496.35l0 -3721.33c0,-822.89 -673.47,-1496.35 -1496.35,-1496.35zm878.05 4872.9l0 0c0,668.87 -549.35,1218.22 -1218.23,1218.22l-2999.59 0c-671.17,0 -1218.22,-549.35 -1218.22,-1218.22l0 -3029.47c0,-671.17 547.05,-1218.22 1218.22,-1218.22l2999.59 0c668.87,0 1218.23,547.05 1218.23,1218.22l0 3029.47z"></path>
                      <path
                        fill-rule="nonzero"
                        d="M6666.67 5010.56c-912.52,0 -1654.95,744.73 -1654.95,1657.25 0,912.52 742.43,1654.95 1654.95,1654.95 912.52,0 1657.24,-742.43 1657.24,-1654.95 0,-912.52 -744.72,-1657.25 -1657.24,-1657.25zm0 2753.65l0 0c-604.52,0 -1096.41,-491.88 -1096.41,-1096.4 0,-604.52 491.89,-1096.4 1096.41,-1096.4 604.52,0 1096.4,491.89 1096.4,1096.4 0,604.52 -491.88,1096.4 -1096.4,1096.4z"
                      ></path>
                      <path d="M8660.4 5347.79c188.48,0 340.19,-151.7 340.19,-337.89 0,-188.48 -151.7,-340.19 -340.19,-340.19 -186.18,0 -337.89,151.7 -337.89,340.19 0,186.18 151.7,337.89 337.89,337.89z"></path>
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      id="linkedin"
                    >
                      <path d="M7.5006104,9C7.5003662,9,7.5001831,9,7.5,9h-4C3.223999,8.9998169,3.0001831,9.2234497,3,9.4993896C3,9.4996338,3,9.4998169,3,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4993896,0.5C3.4996338,22,3.4998169,22,3.5,22h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507C8,21.5003662,8,21.5001831,8,21.5v-12C8.0001831,9.223999,7.7765503,9.0001831,7.5006104,9z M7,21H4V10h3V21z M18,9c-1.0848389,0.000061-2.1393433,0.3580933-3,1.0185547V9.5c0.0001831-0.276001-0.2234497-0.4998169-0.4993896-0.5C14.5003662,9,14.5001831,9,14.5,9h-4c-0.276001-0.0001831-0.4998169,0.2234497-0.5,0.4993896C10,9.4996338,10,9.4998169,10,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V16c0-0.8284302,0.6715698-1.5,1.5-1.5S18,15.1715698,18,16v5.5c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V14C22.9967651,11.2399292,20.7600708,9.0032349,18,9z M22,21h-3v-5c0-1.3807373-1.1192627-2.5-2.5-2.5S14,14.6192627,14,16v5h-3V10h3v1.203125c0,0.2124634,0.1343994,0.4016724,0.335022,0.4716797c0.2001343,0.0721436,0.4240112,0.0079956,0.5556641-0.1591797c1.3625488-1.7268066,3.8669434-2.0220337,5.59375-0.6594238C21.4462891,11.6152344,22.0053101,12.7747192,22,14V21z M5.867981,2.0018311C5.7503662,1.9935913,5.6323242,1.992981,5.5146484,2C4.0053711,1.8969116,2.6983032,3.0368652,2.5952148,4.5461426c-0.0041504,0.06073-0.0062256,0.121521-0.0063477,0.182373c-0.0130005,1.49646,1.1895752,2.7200928,2.6860352,2.7330933c0.0610962,0.0005493,0.1221313-0.0010376,0.1831055-0.0046387h0.0283203c1.5064087,0.1054077,2.8129883-1.0303345,2.918396-2.5367432S7.3743896,2.1072388,5.867981,2.0018311z M5.8334351,6.4598389C5.7179565,6.470459,5.6016235,6.4695435,5.4863281,6.4569702H5.4580078C4.5018921,6.5304565,3.6672974,5.8150024,3.593811,4.8588867C3.5203247,3.902832,4.2357788,3.0681763,5.1918945,2.9946899C5.2994385,2.9864502,5.4074707,2.9882202,5.5146484,3C6.4700317,2.9119873,7.315918,3.6151123,7.4039917,4.5704956C7.4920044,5.5259399,6.7888794,6.3718262,5.8334351,6.4598389z"></path>
                    </svg>
                  </a>

                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                      id="telegram"
                    >
                      <path
                        d="M28.59 4.29a2.23 2.23 0 0 0-2.27-.36L3.41 13.1a1.83 1.83 0 0 0 0 3.38l1.48.61a1 1 0 0 0 1.31-.53 1 1 0 0 0-.54-1.31l-1.1-.45 22.51-9a.22.22 0 0 1 .23 0 .24.24 0 0 1 .08.23l-4.11 19.18a.4.4 0 0 1-.26.3.39.39 0 0 1-.39-.06l-8-6.24 7.83-7.91a1 1 0 0 0-1.22-1.56l-11.48 6.8a1 1 0 1 0 1 1.72l4.83-2.85-2.35 2.39a2 2 0 0 0 .2 3.08l8 6.15a2.4 2.4 0 0 0 1.47.5 2.47 2.47 0 0 0 .83-.15 2.37 2.37 0 0 0 1.52-1.75l4.08-19.16a2.23 2.23 0 0 0-.74-2.18Z"
                        fill="#808080"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0  15 17"
                      className="fill-current"
                        id="snapchat"
                    >
                      <path
                        fill="none"
                        stroke="#808080"
                        stroke-miterlimit="10"
                        d="M15.206 10.954c-2.005-.328-2.909-2.373-2.946-2.46l-.008-.017c-.103-.207-.126-.377-.071-.507.109-.256.529-.388.807-.476.08-.025.156-.049.219-.074.274-.107.469-.224.598-.356.154-.158.184-.308.182-.407-.005-.239-.189-.451-.482-.555a.86.86 0 0 0-.326-.062.75.75 0 0 0-.304.061 1.712 1.712 0 0 1-.625.177.57.57 0 0 1-.207-.045l.018-.289.003-.043c.064-1.011.144-2.268-.191-3.015a4.083 4.083 0 0 0-.918-1.308 3.825 3.825 0 0 0-1.098-.72A4.389 4.389 0 0 0 8.144.5h-.037l-.258.003c-.333 0-.999.047-1.715.36a3.82 3.82 0 0 0-1.094.72 4.082 4.082 0 0 0-.914 1.304c-.335.746-.255 2.003-.191 3.013v.002l.02.331a.597.597 0 0 1-.246.046c-.189 0-.414-.06-.668-.178a.595.595 0 0 0-.254-.052.903.903 0 0 0-.449.125c-.175.101-.287.244-.318.403-.02.106-.019.314.214.524.128.116.316.224.558.319.064.025.139.049.219.074.278.087.699.22.808.476.056.13.032.3-.071.507l-.007.017a4.931 4.931 0 0 1-.755 1.163 4.229 4.229 0 0 1-.912.801 3.378 3.378 0 0 1-1.28.496.35.35 0 0 0-.294.364.462.462 0 0 0 .036.152l.001.001c.072.166.238.308.508.432.33.152.824.28 1.467.38.033.061.066.216.09.321.024.112.05.228.086.35.039.133.141.291.402.291a1.9 1.9 0 0 0 .345-.048c.193-.038.457-.089.787-.089.183 0 .372.016.563.047.368.061.684.283 1.051.54.536.379 1.144.805 2.072.805a.965.965 0 0 0 .076-.003c.03.002.068.003.108.003.928 0 1.536-.426 2.072-.803l.001-.001c.367-.257.683-.479 1.051-.54.191-.031.38-.047.563-.047.315 0 .564.04.787.083.145.028.258.042.345.042h.017a.379.379 0 0 0 .385-.286c.036-.12.061-.233.086-.347.022-.099.057-.258.089-.32.644-.1 1.137-.228 1.467-.38.269-.124.435-.265.507-.431a.44.44 0 0 0 .037-.154.348.348 0 0 0-.293-.362z"
                      ></path>
                    </svg>
                  </a>

                  {/* <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                      id="youtube"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </a> */}

                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      id="wechat"
                    >
                      <g
                        fill="none"
                        stroke="#808080"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="6" cy="7" r=".5"></circle>
                        <circle cx="11" cy="7" r=".5"></circle>
                        <path d="M23.5 15c0-3-3.13-5.5-7-5.5s-7 2.5-7 5.5 3.13 5.5 7 5.5a8.69 8.69 0 0 0 2.35-.32l2.65 1.32-.83-2.09A5.22 5.22 0 0 0 23.5 15Z"></path>
                        <circle cx="14" cy="13" r=".5"></circle>
                        <circle cx="19" cy="13" r=".5"></circle>
                        <path d="M17 9.52v0c0-3.87-3.69-7-8.25-7S.5 5.63.5 9.5A6.68 6.68 0 0 0 3.73 15L2.5 17.5l2.85-1.63a9.46 9.46 0 0 0 3.4.63 9.75 9.75 0 0 0 1-.06"></path>
                      </g>
                    </svg>
                  </a>

                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                        id="WhatsApp"
                    >
                      <g
                        fill="none"
                        stroke="#808080"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M12 .5a11.5 11.5 0 0 0-9.54 17.92L.5 23.5l5.23-1.87A11.5 11.5 0 1 0 12 .5Z"></path>
                        <path d="M9.5 14.5c1.3 1.3 4.17 3 5.5 3a2.53 2.53 0 0 0 2.5-2v-1s-1.23-.6-2-1-2 1-2 1A6.52 6.52 0 0 1 11 13a6.52 6.52 0 0 1-1.5-2.5s1.4-1.23 1-2-1-2-1-2h-1a2.53 2.53 0 0 0-2 2.5c0 1.33 1.7 4.2 3 5.5Z"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  General Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/AboutUs"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Careers"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ContactUs"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Support"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ Terms&Conditions"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/PrivacyPolicy"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Forms
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/AdvertiseYourProperty"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Advertise Your Property
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/AgentAdminPortal"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Agent Admin Portal
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Other Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/Site Map"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Site Map
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/TrademarkIcon"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Trademark Icon
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              Template by{" "}
              <a
                href="http://kkk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Real EState
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#A1B195" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4AF78B"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4AF78B" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4AF78B" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4AF78B" stopOpacity="0" />
                <stop offset="1" stopColor="#4AF78B" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4AF78B" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4AF78B" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4AF78B" stopOpacity="0" />
                <stop offset="1" stopColor="#4AF78B" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4AF78B" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4AF78B" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4AF78B" stopOpacity="0" />
                <stop offset="1" stopColor="#4AF78B" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
