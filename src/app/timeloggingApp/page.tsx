'use client'
//https://daisyui.com/components/carousel/#item4
import Image from "next/image"

export default function Timelog(){

    return(
        <main className="bg-white">
            <div className="flex justify-center">
                <div className="carousel carousel-vertical rounded-box h-96">
                    <div className="carousel-item h-96">
                        <Image src="./timelogging5.PNG" alt="Burger" />
                    </div>
                    <div className="carousel-item h-96">
                        <Image src="./timelogging2.PNG" alt="Burger" />
                    </div>
                    <div className="carousel-item h-96">
                        <Image src="./timelogging3.PNG" alt="Burger" />
                    </div>
                    <div className="carousel-item h-96">
                        <Image src="timelogging4.PNG" alt="Burger" />
                    </div>
                </div>
            </div>
        </main>
    )
}