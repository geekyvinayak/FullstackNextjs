"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./links.module.css";
import NavlinkItems from "./navlinkItems/NavlinkItems";
const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/blog", title: "Blogs" },
];

function Links() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setloading] = useState(false);

  const handelDrawer = () => {
    setOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setOpen(false);
  };


  //temp
  const session = true;
  const isAdmin = true;

  // Mobile check
  useEffect(() => {
    setloading(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    // Initial check
    handleResize();
    // Event listener for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup on component unmount
    return () => {setloading(false);window.removeEventListener("resize", handleResize);}
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        !event.target.closest(".linkscontainer") &&
        !event.target.closest("button")
      ) {
        closeDrawer();
      }
    };
    if (open) {
      document.body.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  if(!loading){return null}

  if (isMobile) {
    return (
      <>
        {open && (
          <div className={styles.linkscontainer}>
            {links.map((ele) => (
              <NavlinkItems
                item={ele}
                key={ele.path}
                handelDrawer={closeDrawer}
              />
            ))}
            {session ? (
              isAdmin && (
                <>
                  <NavlinkItems
                    handelDrawer={closeDrawer}
                    item={{ path: "/admin", title: "Admin" }}
                    key={"/admin"}
                  />
                  <button className={styles.logout}>Logout</button>
                </>
              )
            ) : (
              <NavlinkItems
                item={{ path: "/login", title: "Login" }}
                key={"/login"}
              />
            )}
          </div>
        )}
        <button onClick={handelDrawer} className={styles.menuBotton}>
          &#8801;
        </button>
      </>
    );
  }


  return (
    <div className={styles.linkscontainer}>
      {links.map((ele) => (
        <NavlinkItems handelDrawer={closeDrawer} item={ele} key={ele.path} />
      ))}
      {session ? (
        isAdmin && (
          <>
            <NavlinkItems
              handelDrawer={closeDrawer}
              item={{ path: "/admin", title: "Admin" }}
              key={"/admin"}
            />
            <button className={styles.logout}>Logout</button>
          </>
        )
      ) : (
        <NavlinkItems
          item={{ path: "/login", title: "Login" }}
          key={"/login"}
        />
      )}
    </div>
  );
}

export default Links;
