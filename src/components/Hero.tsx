import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Mobile from "./Mobile";

const Hero = () => {
    return (
        <section className='flex flex-row items-center justify-center my-10 h-screen'>
            <div className="">
                <h1 className='text-4xl text-white'>
                    Bienvenue sur<br />
                    mon portfolio
                </h1>
                <div className='text-white'>
                    Mon objectif est de vous rendre inoubliable !
                </div>
                <div className="my-8">
                    <a href="https://www.google.com" className="btngrad text-white px-8 py-4 my-4 rounded-full shadow-lg">
                        Bouton
                    </a>
                </div>
            </div>
            <Canvas>
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                    <Mobile />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Hero
