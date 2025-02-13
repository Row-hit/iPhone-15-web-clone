import React from "react";
import { footerLinks } from "../constant";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-grayy text-xs">
            More ways to shop{" "}
            <span className="undeline text-blue">Find an Apple Store</span> or{" "}
            <span className="undeline text-blue">Other retailer </span>
            near you
          </p>
          <p className="font-semibold text-grayy text-xs mt-2">
            Or Call 0018000-4532-52
          </p>
        </div>
        <hr className="border-gray-500 border-dashed my-5" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-grayy text-xs">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex ">
            {footerLinks.map((link, i) => {
              return (
                <p key={link} className="font-semibold text-xs text-grayy">
                  {link}
                  {""}
                  {i !== footerLinks.length - 1 && (
                    <span className="mx-2">|</span>
                  )}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
