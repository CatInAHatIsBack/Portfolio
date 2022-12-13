import React from 'react'
import styles from './style'

import { Navbar, Hero, Business, Footer, Projects,Wave_bot, Wave_top, HireMe} from './components'

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
        <Wave_bot/>
      </div>
    </div>
  {/* paddingX shortens width */} 
    <div className={`bg-primary  ${styles.flexStart} relative w-full`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats/> */}

        <Wave_top className="absolute"/>
        <Projects/>
        <Wave_bot/>
        <Wave_top/>
        <Business/>
        <Wave_bot/>
        <Wave_top/>
        <HireMe/>
        <Wave_bot/>
        <Wave_top/> 
        {/* <Billing/> */}
        {/* <CardDeal/> */}
        {/* <Testimonials/> */}
        {/* <Clients/> */}
        {/* <CTA/> */}
       {/* <Wave/> */}
        <Footer/>
       
      </div>
    </div> 


  </div>
)

export default App