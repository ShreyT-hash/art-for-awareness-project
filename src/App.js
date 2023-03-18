import logo from './logo.svg';
import './App.css';
import logo2 from './svg_graphics/END_HUNGER.svg';
import logo3 from './svg_graphics/HIDDEN_HUNGER.svg';
import CountUp from 'react-countup';
import './styles.css';
import Marquee from "react-fast-marquee";
import preg_women_healthy from './svg_graphics/preg_women_healthy.png'
import preg_women_unhealthy from './svg_graphics/preg_women_unhealthy.png'
import children_healthy from './svg_graphics/children_healthy.png'
import children_unhealthy from './svg_graphics/children_unhealthy.png'
import children_unhealthy_2 from './svg_graphics/children_unhealthy_2.png'

function App() {
  return (
    // <div className="styles">

    //   <div className='styles-main-text'>
    //   <img src={logo2} width={2100} />
    //   </div>
    //   {/* <CountUp className={"App-parent"} delay={0.4} start={0} end={100} duration={4} /> */}

    // </div>
    <div class="container">




      <div class="image-wrapper">

        <div className='text-wrapper new-top-count'>
          <CountUp delay={0.4} start={0} end={40} duration={8}></CountUp>
          <p className='text-wrapper new-top-text'> % of pregnant women in the world have anemia </p>
        </div>

        <img height={150} src={logo3} alt="Your Image" />

        <div className='text-wrapper new-bot-count'>
          <CountUp delay={0.4} start={0} end={6} duration={11}></CountUp>
        <p className={"text-wrapper new-bot-text"}>  out of 10 children in Sub-Saharan-Africa are anemic</p>
      </div>


      </div>

     


      <Marquee className='text-wrapper mqtop' gradient={false} speed={100}>
        <img height={160} src={preg_women_healthy} />
        <img height={160} src={preg_women_healthy} />
        <img height={160} src={preg_women_healthy} />
        <img height={160} src={preg_women_healthy} />
        <img height={160} src={preg_women_healthy} />
        <img height={160} src={preg_women_healthy} />
        <img height={160} src={preg_women_unhealthy} />
        <img height={160} src={preg_women_unhealthy} />
        <img height={160} src={preg_women_unhealthy} />
        <img height={160} src={preg_women_unhealthy} />
        <img height={160} src={preg_women_healthy} />
        <img height={160} src={preg_women_healthy} />
        <img height={160} src={preg_women_healthy} />
        <img height={160} src={preg_women_healthy} />
        <img height={160} src={preg_women_healthy} />
        <img height={160} src={preg_women_healthy} />
        <img height={160} src={preg_women_unhealthy} />
        <img height={160} src={preg_women_unhealthy} />
        <img height={160} src={preg_women_unhealthy} />
        <img height={160} src={preg_women_unhealthy} />

      </Marquee>
      <Marquee className='text-wrapper mqbot' gradient={false} speed={80}>
        <img height={200} src={children_unhealthy} />
        <img height={200} src={children_unhealthy_2} />
        <img height={200} src={children_healthy} />
        <img height={200} src={children_unhealthy} />
        <img height={200} src={children_unhealthy_2} />
        <img height={200} src={children_healthy} />
        <img height={200} src={children_unhealthy} />
        <img height={200} src={children_unhealthy_2} />
        <img height={200} src={children_healthy} />
        <img height={200} src={children_unhealthy} />
        <img height={200} src={children_unhealthy_2} />
        <img height={200} src={children_healthy} />
      </Marquee>



    </div>
  );
}

export default App;
