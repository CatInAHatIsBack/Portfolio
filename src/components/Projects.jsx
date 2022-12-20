import React from 'react'
import { projects, projectsBig } from "../constants";
import styles, { layout } from "../style";

const Feat = ({feature}) => 
    // console.log(feature)
(
    <div>
    <span className="inline-block bg-slate-500 rounded-full px-3 py-1 text-sm font-semibold text-zinc-800 text-[12px] mr-2 mb-2">#{feature}</span>
    </div>
)

const Project = ({bubbles, img, title, content, link, span}, index) => 
    
    (
        
    // <div className='col-span-2'>
    // <div className={span === 1 ? 'col-span-1' : span === 2 ? 'col-span-2': 'col-span-3'}>
    // <div className={span === 1 ? 'col-span-1' : 'col-span-2'}>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <div className=" overflow-hidden shadow-lg rounded-[20px] feature-card mt-6 transition duration-250 hover:scale-110 ">
            <img className="w-full ml-auto mr-auto rounded-b-lg " src={img} alt="Mountain"/>
            <div className="px-6 py-4">
            <div className="font-poppins font-semibold text-white text-xl mb-2">{title}</div>
            <p className="font-poppins font-normal text-dimWhite text-[18px] text-base">
            {content}
            </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-wrap">
                {bubbles.map((feature, index) => 
                // console.log(feature.link)
                (
                    <Feat key={feature.name} feature={feature.name} />
                // <Feat key={feature.name} {feature.name} index={index} />
                ))}
                {/* <feat key="He" {...links} /> */}
            </div>
        </div>
        </a>
)
const BigProject = ({bubbles, img, title, content, link, span}) => 
    
    (
    // <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <div className='col-span-full hover:grayscale'>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <div className=" overflow-hidden shadow-lg rounded-[20px] feature-card mt-6 mb-32 transition duration-250 hover:scale-105 ">
            <img className="w-full ml-auto mr-auto rounded-b-lg " src={img} alt="Mountain"/>
            <div className="px-6 py-4">
            <div className="font-poppins font-semibold text-white text-xl mb-2">{title}</div>
            <p className="font-poppins font-normal text-dimWhite text-[18px] text-base">
            {content}
            </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-wrap">
                {bubbles.map((feature, index) => 
                // console.log(feature.link)
                (
                    <Feat key={feature.name} feature={feature.name} />
                // <Feat key={feature.name} {feature.name} index={index} />
                ))}
                {/* <feat key="He" {...links} /> */}
            </div>
        </div>
        </a>
    </div>
)

const Projects = () => (
    <div className={`${styles.paddingX}`} id="projects">
        <div className="px-10 py-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            <div className={`${layout.sectionInfo} col-span-1`}>
            <h2 className={styles.heading2}>
                Projects
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                A collection of personal & professional projects 
            </p>

            </div>
                {projectsBig.map((feature, index) =>
                (
                    <BigProject key={feature.id} {...feature} index={index} />
                ))}

                {projects.map((feature, index) =>
                // console.log(feature)
                (
                    <div className={index % 3 === 0 ? 'col-span-2' : 'col-span-1'}>
                        <Project key={feature.id} {...feature} index={index} />
                    </div>
                ))}
            </div>
        {/* <div>
            {projectsBig.map((feature, index) =>
            // console.log(feature)
            (
                <BigProject key={feature.id} {...feature} index={index} />
            ))}
        </div> */}
        {/* <div className='relative w-full'> */}
        {/* <div className="wave_projects">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div> */}
        {/* </div> */}
</div>
)

export default Projects