import React from "react";
import kiit from "../assets/Images/kiit.png";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";


const About = () => {
  return (
    <div>
      <div className="flex flex-col">
        <span className="text-green-600 text-5xl font-bold m-7">About us</span>
        <div className="bg-green-600 my-8 rounded-3xl py-5 px-4 h-auto m-7">
          <p className="text-xl font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            omnis fuga nam aspernatur voluptatum aut veritatis ab maxime
            expedita, minus dignissimos, repellendus nobis neque distinctio
            doloremque delectus consectetur quisquam. Excepturi, impedit! Quae
            minus odio tempora molestiae earum perferendis non assumenda, nam
            doloribus eligendi nobis provident quas ullam culpa eum facilis
            numquam dolorem unde fuga iure. Culpa sed at nemo cum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Excepturi fuga tempora,
            voluptatem est impedit dignissimos et unde cupiditate recusandae
            consequatur dicta eius accusantium, architecto vero delectus
            debitis, eum quaerat fugiat itaque blanditiis explicabo cumque
            voluptas similique. Qui expedita enim facilis pariatur. Nam aut
            recusandae laudantium facilis enim harum animi sunt atque ducimus
            omnis asperiores earum, quibusdam consectetur impedit accusamus
            neque minima voluptate eum doloremque, nemo odit fugiat deserunt?
            Beatae maiores saepe magnam harum hic porro voluptatibus ea fugit,
            placeat illo, doloribus quisquam? Architecto sequi natus labore ut
            excepturi et temporibus! Ipsum, sapiente! Consequuntur asperiores
            impedit magni a inventore sit dignissimos?
          </p>
          <div className="hidden xl:inline xl:absolute md:inline md:absolute right-10 bottom-2">
            <img src={kiit} className="h-32" />
          </div>
        </div>
        <a href="/" className="flex items-center space-x-2 m-7 bg-green-600 w-max rounded-xl p-3 hover:shadow-md hover:bg-green-300">
            <ArrowLeftIcon className="h-7"/>
            <span className="font-bold">Go Back Home</span>
        </a>
      </div>
    </div>
  );
};

export default About;
