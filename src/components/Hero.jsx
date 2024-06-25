import { useState } from "react";


const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Black", "violet"];

const Hero = () => {

    const [color, setColor] = useState('violet')

    return (
        <main className={`w-full h-screen duration-200 flex justify-center items-end`} style={{backgroundColor: color}}>
            <div className="border transition-all h-max p-5 rounded-xl mb-16 flex gap-5 bg-slate-300 text-white  shadow-xl">
                {colors.map((ele,idx) => {
                    return(
                        <button key={idx} onClick={()=>setColor(ele)} className={`rounded-xl p-3 mix-blend-multiply`} style={{backgroundColor: ele}}>{ele}</button>
                    )
                })}
              
            </div>
        </main>
    );
};

export default Hero;
