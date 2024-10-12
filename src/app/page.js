import TextContainer from "@/components/globalComponents/TextContainer";
import CategoriesSection from "@/components/homeComponents/CategoriesSection";
import FamousMusicsSection from "@/components/homeComponents/FamousMusicsSection";
import MainSlider from "@/components/homeComponents/MainSlider";
import TextCatSection from "@/components/homeComponents/TextCatSection";

export default function Home() {
  return (
    <>
      <MainSlider />
      <CategoriesSection />
      <TextContainer text={'این اپ برای لحظاتی که می‌خوای با دوستانت همصدایی کنی، ساخته شده.'} />
      <FamousMusicsSection />
      <TextCatSection />
    </>
  );
}
