import React from 'react'
import { projects } from "../constants";
import { star } from "../assets";

const Feat = ({feature}) => 
    // console.log(feature)
(
    <div>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{feature}</span>
    </div>
)

const Project = ({links}) => 
    
    (
    <div className="rounded overflow-hidden shadow-lg">
        <img className="w-.1" src={star} alt="Mountain"/>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mountain</div>
        <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            {links.map((feature, index) => 
            // console.log(feature.link)
            (
            <Feat key={feature.name} {...feature} index={index} />
            ))}
            {/* <feat key="He" {...links} /> */}
        </div>
    </div>
)

const Projects = () => (
<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    {projects.map((feature, index) =>
    // console.log(feature)
     (
        <Project key={feature.id} {...feature} index={index} />
      ))}
</div>
)

export default Projects