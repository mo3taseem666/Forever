import AboutImg from '../../../assets/frontend_assets/about_img.webp';

export default function ImgWithParagraphs() {
   return (
      <div className="flex items-center xs:flex-col mt-9 gap-16">
         <img src={AboutImg} alt="about" className="w-[450px]" />
         <div className="max-w-[775px] text-sm font-medium  text-gray-600 flex flex-col gap-10">
            <p>
               Forever was born out of a passion for innovation and a desire to
               revolutionize the way people shop online. Our journey began with
               a simple idea: to provide a platform where customers can easily
               discover, explore, and purchase a wide range of products from the
               comfort of their homes.
            </p>
            <p>
               Since our inception, we&apos;ve worked tirelessly to curate a
               diverse selection of high-quality products that cater to every
               taste and preference. From fashion and beauty to electronics and
               home essentials, we offer an extensive collection sourced from
               trusted brands and suppliers.
            </p>
            <p className="text-base font-bold text-gray-800">Our Mission</p>
            <p>
               Our mission at Forever is to empower customers with choice,
               convenience, and confidence. We&apos;re dedicated to providing a
               seamless shopping experience that exceeds expectations, from
               browsing and ordering to delivery and beyond.
            </p>
         </div>
      </div>
   );
}
