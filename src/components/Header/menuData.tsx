import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  
  {
    id: 1,
    title: " Language",
   newTab: false,
    submenu: [
      {
       id: 41,
       title: "English",
        path: "/English",
        newTab: false,
      },
      {
        id: 42,
        title: "Arabic",
        path: "/Arabic",
        newTab: false,
      },
    ]
  },
  {
    id: 2,
    title: " Currency",
   newTab: false,
   submenu: [
      {
        id: 51,
        title: "AED",
        path: "/AED",
        newTab: false,
      },
      {
        id: 52,
        title: "USD",
        path: "/USD",
        newTab: false,
      },
       {
         id: 53,
         title: "EUR",
         path: "/EUR",
         newTab: false,
       },
       {
         id: 54,
         title: "INR",
         path: "/INR",
         newTab: false,
       },
      {
         id: 55,
         title: "CNY",
         path: "/CNY",
         newTab: false,
       },
      {
         id: 56,
         title: "RUB",
         path: "/RUB",
         newTab: false,
      },
      ]
    },
  {
    id: 3,
    title: " Area Unit",
   newTab: false,
    submenu: [
      {
       id: 31,
       title: "sqft",
        path: "/sqft",
        newTab: false,
      },
      {
        id: 32,
        title: "sqm",
        path: "/sqm",
        newTab: false,
      },
    ]
  },
  {
    id: 4,
    title: "Profile",
    path: "/Profile",
    newTab: false,
  },
  {
    id: 5,
    title: " Projects ",
    path: "/ Projects ",
    newTab: false,
  },
  {
    id: 6,
    title: "Developers",
    path: "/Developers",
    newTab: false,
  },
  {
    id: 7,
    title: " Insights",
    path: "/ Insights",
    newTab: false,
  },
  {
    id: 8,
    title: "Agency",
    path: "/Agency",
    newTab: false,
  },
  {
    id: 9,
    title: "Activities",
    path: "/Activities",
    newTab: false,
  }
  //{
    //id: 5,
    //title: " Insights",
   // newTab: false,
    //submenu: [
      //{
       // id: 41,
       // title: "Commercial",
        //path: "/commercial",
        //newTab: false,
      //},
      //{
        //id: 42,
        //title: "News",
        //path: "/news",
        //newTab: false,
      //},
      // {
      //   id: 41,
      //   title: "About Page",
      //   path: "/about",
      //   newTab: false,
      // },
      // {
      //   id: 42,
      //   title: "Contact Page",
      //   path: "/contact",
      //   newTab: false,
      // },
      // {
      //   id: 43,
      //   title: "Blog Grid Page",
      //   path: "/blog",
      //   newTab: false,
      // },
      // {
      //   id: 44,
      //   title: "Blog Sidebar Page",
      //   path: "/blog-sidebar",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    //],
  //},
];
export default menuData;
