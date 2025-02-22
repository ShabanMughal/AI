import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div
        className="container flex sm:justify-between justify-center items-center gap-10
        max-sm:flex-col"
      >
        <p className="caption text-n-4 lg:block">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              href={item.url}
              key={item.id}
              target="_blank"
              className="flex justify-center items-center w-10 h-10 bg-n-7 
                    hover:bg-n-6 rounded-full transition-colors"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;


