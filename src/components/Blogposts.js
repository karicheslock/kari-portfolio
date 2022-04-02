import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { blogposts } from "../data";
import { Link } from 'react-router-dom';

export default function Blogposts() {
  return (
    <section id="blogposts">
      <div className="container px-5 py-10 mx-auto text-center bg-zinc-800">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          <span className="text-rose-400">Recent</span> Blog Posts
        </h1>
        <div className="flex flex-wrap m-4">
          {blogposts.map((blogpost) => (
            <div key={blogpost.title} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                  <Link to={`${blogpost.link}`} target='_blank'>
                  <div className="inline-flex items-center">
                    <img
                      alt="blogpost"
                      src={blogpost.image}
                      className="w-1/2 rounded flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <p className="leading-relaxed mb-6">{blogpost.title}</p>
                      <span className="text-gray-500 text-sm uppercase">
                        {blogpost.description}
                      </span>
                    </span>
                  </div>
                  </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}