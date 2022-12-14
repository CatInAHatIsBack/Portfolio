import { offer, mailing} from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

  // console.log(mailing[0].email)
const FeatureCard = ({ icon, title, content, index, body}) => (
  // <a href={mailer}>
  // console.log(mailing)
  <a href={`mailto:${mailing[0].email}?subject=${title} &body=${body}`}>
    {/* mailer: "mailto:hello@hello.com?subject=Email Subject&body=Contents of email", */}
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== 0 ? "mt-6" : "mt-0"} feature-card transition duration-250 hover:scale-110 `}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
  </a>
);
const My_text = () =>  (
  <div className={layout.sectionTxt}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Services<br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        To contact,<br/> 
        click a service.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>
    </div>

);
const HireMe = () =>  (
  <div className={`${styles.paddingX} mb-10 `}>

  <section id="services" className={layout.section}>
    
    <div className={`${layout.sectionImgs} flex-col`}>
      {offer.map((reason, index) => (
        <FeatureCard key={reason.id} {...reason} index={index} />
      ))}
    </div>

    <My_text className="mb-100"/>
    
  </section>
  </div>
);

export default HireMe