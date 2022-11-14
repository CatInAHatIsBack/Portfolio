import React from 'react'
import { projects } from "../constants";
import styles, { layout } from "../style";

const Feat = ({feature}) => 
    // console.log(feature)
(
    <div>
    <span className="inline-block bg-slate-500 rounded-full px-3 py-1 text-sm font-semibold text-zinc-800 text-[12px] mr-2 mb-2">#{feature}</span>
    </div>
)

const Project = ({links, img, title, content}) => 
    
    (
    // <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

        <div className=" overflow-hidden shadow-lg rounded-[20px] feature-card mt-6 transition duration-250 hover:scale-110">
            <img className="w-10/12 ml-auto mr-auto" src={img} alt="Mountain"/>
            <div className="px-6 py-4">
            <div className="font-poppins font-semibold text-white text-xl mb-2">{title}</div>
            <p className="font-poppins font-normal text-dimWhite text-[18px] text-base">
            {content}
            </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-wrap">
                {links.map((feature, index) => 
                // console.log(feature.link)
                (
                    <Feat key={feature.name} feature={feature.name} />
                // <Feat key={feature.name} {feature.name} index={index} />
                ))}
                {/* <feat key="He" {...links} /> */}
            </div>
        </div>
    // </div>
)

const Projects = () => (
    <div className={`${styles.paddingX} `}>
<div className="px-10 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Projects You might find Interesting
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

    </div>
    {projects.map((feature, index) =>
    // console.log(feature)
     (
        <Project key={feature.id} {...feature} index={index} />
      ))}
</div>
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