// import React, { useState } from "react";
// import { Tooltip } from "antd";
// import { NavLink, useLocation } from "react-router-dom";
// import { FlexContainer } from "../../Components/UI/Layout";
// import { connect } from "react-redux";
// import FWLogo from "../../images/stw-logo_page_1.png";
// import { MenuUnfoldOutlined } from "@ant-design/icons";

// const JobHeaderLeft = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation(); // ✅ correct replacement for withRouter

//   return (
//     <FlexContainer style={{ lineHeight: "0.125em", alignItems: "center" }}>
//       <div className="flex flex-row items-center max-sm:leading-3 justify-evenly">

//          <div className="flex flex-row items-center justify-between">

//     <a href="https://sw.libaxis.com/talent">
// <img
//   src={FWLogo}
//   alt="Tekorero logo"
//   className="h-12 w-auto object-contain scale-150"
//   style={{ transformOrigin: "left center" }}
// />
//     </a>

//   </div>

//         {/* Mobile menu */}
//         <div className="max-sm:flex justify-end w-80 md:w-0">
//           <div className={`${open ? "block" : "hidden"}`}>

//             <Tooltip>
//               <NavLink
//                 to="/talent"
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-600 font-bold" : "text-black"
//                 }
//               >
//                 Talent
//               </NavLink>
//             </Tooltip>
//             &nbsp;&nbsp;

//             {/* <Tooltip>
//               <NavLink
//                 to="/partner"
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-600 font-bold" : "text-black"
//                 }
//               >
//                 Partner
//               </NavLink>
//             </Tooltip>
//             &nbsp;&nbsp; */}

//             <Tooltip>
//               <NavLink
//                 to="/vacancy"
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-600 font-bold" : "text-black"
//                 }
//               >
//                 Vacancy
//               </NavLink>
//             </Tooltip>
//           </div>

//           <MenuUnfoldOutlined
//             className="block md:hidden"
//             onClick={() => setOpen(!open)}
//           />
//         </div>

//         {/* Desktop menu */}
//         <div className="max-sm:hidden md:ml-margin38">
//           <Tooltip>
//             <NavLink
//               to="/talent"
//               className={({ isActive }) =>
//                 isActive ? "text-blue-600 font-bold" : "text-black"
//               }
//             >
//               Talent
//             </NavLink>
//           </Tooltip>
//           &nbsp;&nbsp;

//           {/* <Tooltip>
//             <NavLink
//               to="/partner"
//               className={({ isActive }) =>
//                 isActive ? "text-blue-600 font-bold" : "text-black"
//               }
//             >
//               Partner
//             </NavLink>
//           </Tooltip>
//           &nbsp;&nbsp; */}

//           <Tooltip>
//             <NavLink
//               to="/vacancy"
//               className={({ isActive }) =>
//                 isActive ? "text-blue-600 font-bold" : "text-black"
//               }
//             >
//               Vacancy
//             </NavLink>
//           </Tooltip>
//         </div>

//       </div>
//      </FlexContainer>
//   );
// };

// export default connect(null, null)(JobHeaderLeft);
import React, { useState } from "react";
import { Tooltip } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { FlexContainer } from "../../Components/UI/Layout";
import { connect } from "react-redux";
import FWLogo from "../../images/stw-logo_page_1.png";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const JobHeaderLeft = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // ✅ correct replacement for withRouter

  return (
    <FlexContainer style={{ lineHeight: "0.125em", alignItems: "center" }}>
      <div className="flex flex-row items-center justify-between w-full max-sm:px-3 max-sm:leading-3">

         <div className="flex flex-row items-center justify-between">

    <a href="https://sw.libaxis.com/talent">
<img
  src={FWLogo}
  alt="Tekorero logo"
  className="h-10 md:h-12 w-auto object-contain max-sm:scale-100 scale-150"
  style={{ transformOrigin: "left center" }}
/>
    </a>

  </div>

        {/* Mobile menu */}
        <div className="max-sm:flex justify-end flex-1 md:w-0">
          <div
  className={`
    ${open ? "block" : "hidden"}
    absolute
    top-14
    right-2
    bg-white
    shadow-md
    rounded
    p-2
    z-50
    md:static
    md:bg-transparent
    md:shadow-none
  `}
>

            <Tooltip>
              <NavLink
                to="/talent"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "text-black"
                }
              >
                Talent
              </NavLink>
            </Tooltip>
            &nbsp;&nbsp;

            {/* <Tooltip>
              <NavLink
                to="/partner"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "text-black"
                }
              >
                Partner
              </NavLink>
            </Tooltip>
            &nbsp;&nbsp; */}

            <Tooltip>
              <NavLink
                to="/vacancy"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "text-black"
                }
              >
                Vacancy
              </NavLink>
            </Tooltip>
          </div>

          <MenuUnfoldOutlined
            className="block md:hidden"
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* Desktop menu */}
        <div className="max-sm:hidden md:ml-margin38">
          <Tooltip>
            <NavLink
              to="/talent"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              Talent
            </NavLink>
          </Tooltip>
          &nbsp;&nbsp;

          {/* <Tooltip>
            <NavLink
              to="/partner"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              Partner
            </NavLink>
          </Tooltip>
          &nbsp;&nbsp; */}

          <Tooltip>
            <NavLink
              to="/vacancy"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              Vacancy
            </NavLink>
          </Tooltip>
        </div>

      </div>
     </FlexContainer>
  );
};

export default connect(null, null)(JobHeaderLeft);
