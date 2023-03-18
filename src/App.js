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
  <img height={150} src={logo3} alt="Your Image"/>
  </div>
  {/* <div class="text-wrapper top">Text 1</div>
  <div class="text-wrapper left">Text 2</div>
  <div class="text-wrapper right">Text 3</div>
  <div class="text-wrapper bottom">Text 4</div> */}
  {/* <div class="text-wrapper top-left">Text 5</div> */}
  {/* <div class="text-wrapper top-right">Text 6</div> */}
  {/* <div class="text-wrapper bottom-left">Text 7</div> */}
  {/* <div class="text-wrapper bottom-right">Text 8</div> */}
  {/* <div class="text-wrapper center">Text 9</div> */}
  <Marquee className='text-wrapper mqtop' gradient={false} speed={100}>
    <img height={160} src={preg_women_healthy}/>
    <img height={160} src={preg_women_healthy}/>
    <img height={160} src={preg_women_healthy}/>
    <img height={160} src={preg_women_healthy}/>
    <img height={160} src={preg_women_healthy}/>
    <img height={160} src={preg_women_healthy}/>
    <img height={160} src={preg_women_unhealthy}/>
    <img height={160} src={preg_women_unhealthy}/>
    <img height={160} src={preg_women_unhealthy}/>
    <img height={160} src={preg_women_unhealthy}/>
    <img height={160} src={preg_women_healthy}/>
    <img height={160} src={preg_women_healthy}/>
    <img height={160} src={preg_women_healthy}/>
    <img height={160} src={preg_women_healthy}/>
    <img height={160} src={preg_women_healthy}/>
    <img height={160} src={preg_women_healthy}/>
    <img height={160} src={preg_women_unhealthy}/>
    <img height={160} src={preg_women_unhealthy}/>
    <img height={160} src={preg_women_unhealthy}/>
    <img height={160} src={preg_women_unhealthy}/>

</Marquee>
<Marquee className='text-wrapper mqbot' gradient={false} speed={80}>
  <img height={200} src={children_unhealthy}/>
  <img height={200} src={children_unhealthy_2}/>
  <img height={200} src={children_healthy}/>
  <img height={200} src={children_unhealthy}/>
  <img height={200} src={children_unhealthy_2}/>
  <img height={200} src={children_healthy}/>
  <img height={200} src={children_unhealthy}/>
  <img height={200} src={children_unhealthy_2}/>
  <img height={200} src={children_healthy}/>
  <img height={200} src={children_unhealthy}/>
  <img height={200} src={children_unhealthy_2}/>
  <img height={200} src={children_healthy}/>
</Marquee>




  <CountUp className={"text-wrapper top-left"} delay={0.4} start={0} end={40} duration={8} />
  <p className={"text-wrapper line-top"}> % of pregnant women in the world have anemia </p>
  <CountUp className={"text-wrapper bottom"} delay={0.4} start={0} end={6} duration={11} />
  <p className={"text-wrapper line-bottom"}>out of every 10 children in Sub-Saharan Africa are anemic</p>


</div>
  );
}

export default App;
