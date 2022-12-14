import { reasons } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== reasons.length - 1 ? "mb-6" : "mb-0"} feature-card transition duration-250 hover:scale-110`}>
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
);

const Business = () =>  (
  <div className={`${styles.paddingX} `}>

  <section id="about" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Characteristics 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Personal characteristics that would make me a great fit for your team!
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col `}>
      {reasons.map((reason, index) => (
        <FeatureCard key={reason.id} {...reason} index={index} />
      ))}
    </div>
  </section>
  </div>
);

export default Business