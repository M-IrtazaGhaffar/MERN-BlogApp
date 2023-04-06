import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className=" text-justify bg-red-500 lg:mx-10 mx-5 p-10 rounded-md text-white">
        <h3 className="text-3xl text-center pb-10 font-bold">About us</h3>
        <p className="lg:px-24">
          Welcome to our blogging platform, where creativity meets opportunity!
          Our website is designed to provide a space for individuals to share
          their unique perspectives and experiences with the world, while also
          earning money for their efforts. We believe that everyone has a story
          to tell, and our platform makes it easy for users to connect with each
          other, share ideas, and collaborate on projects. In addition, our
          platform allows users to mention and tag other users in their posts,
          promoting a sense of community and encouraging engagement. Whether
          you're a seasoned blogger or just starting out, we invite you to join
          our community and start sharing your voice with the world!
        </p>
        <div className="flex items-center justify-around my-10 bg-red-400 rounded-2xl p-2">
          {/* <h5 className="text-white">Having other issues</h5> */}
          <Link
            className="font-bold flex items-center gap-1 text-white"
            to="/contact"
          >
            Contact <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
