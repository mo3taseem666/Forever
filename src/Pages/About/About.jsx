import Title from '../../Golbal Components/Title';
import ImgWithParagraphs from './components/ImgWithParagraphs';
import WyhChooseUs from './components/WyhChooseUs';

export default function About() {
   return (
      <div className="pt-5 mt-5 flex flex-col border-t">
         <Title first="ABOUT" second="US" />
         <ImgWithParagraphs />
         <WyhChooseUs />
      </div>
   );
}
