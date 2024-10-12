'use client'


import MusicSlider from '@/components/globalComponents/MusicSlider'
import pic1 from '../../../../public/pictures/1.png'
import pic2 from '../../../../public/pictures/2.png'

const picsArray = [
    { id: 1, pic: pic1, audioTitle: 'کعبه', singer: 'معین' },
    { id: 2, pic: pic2, audioTitle: 'یه چیزی میشه دیگه', singer: 'رضا صادقی' },
    { id: 3, pic: pic1, audioTitle: 'کعبه', singer: 'معین' },
    { id: 4, pic: pic2, audioTitle: 'یه چیزی میشه دیگه', singer: 'رضا صادقی' },
]

const FamousMusicsSection = () => {
    return (
        <>
            <section className="p-5 w-full">
                <h3 className="text-lg">
                    معروف ترین آهنگ ها
                </h3>
                <div className="w-full py-5">
                    <MusicSlider picsArray={picsArray} isPopular={false} />
                </div>
            </section>

        </>
    )
}

export default FamousMusicsSection