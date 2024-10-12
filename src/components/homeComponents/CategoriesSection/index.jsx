'use client'
import SearchBox from "@/components/globalComponents/SearchBox";
import CatSlider from "../CatSlider";



const CategoriesSection = () => {
    return (
        <>
            <section className="w-full px-5">
                <SearchBox />
                <h3>با هم همخوانی کنیم...</h3>

                <CatSlider />
            </section>
        </>
    )
}

export default CategoriesSection