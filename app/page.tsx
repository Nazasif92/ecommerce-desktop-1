import Navbar from '@/app/component/NavbarLight';
import Header from "./component/header";
import Hero from './Hero/page';
import Desk31 from './desk31/page';
import Desk10 from './desk10/page';
import Hero2 from './hero2/page';
import Fluid from './fluid/page';
import Desktop3 from './desktop3/page';


export default function Home () {
  return (
    <div className='w-1440px h- 6197px py-[-12664] pl-[-2570px]'>
      <Header/>
      <Navbar/>
      <Hero/>
      <Desk31/>
      <Desk10/>
      <Hero2/>
      <Fluid/>
      <Desktop3/>
      </div>
  );
};