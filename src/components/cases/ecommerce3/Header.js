import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <main>

            <div className="relative px-6 lg:px-8">
                <div className="mx-auto lg:mx-12 max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12  ">
                    <div>
                        <div>
                            <h1 className="text-4xl font-semibold tracking-tight pb-16  sm:text-7xl">
                                Casos de Estudio
                                
                            </h1>
                            <p className="mt-16 text-2xl max-w-3xl leading-8 text-black ">
                                Jumpstart today your business with one of our services that range from <span className='lg:text-xl text-md font-medium leading-8 text-gray-700 sm:text-center  transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button'><Link to='/'>Web Development</Link></span>
                                <span className='mx-1 lg:text-xl text-md font-medium leading-8 text-gray-700 sm:text-center transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button'><Link to='/'> App Development</Link></span>
                                <span className='mx-1 lg:text-xl text-md font-medium leading-8 text-gray-700 sm:text-center transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button'><Link to='/'> Game Development</Link></span>
                                <span className='mx-1 lg:text-xl text-md font-medium leading-8 text-gray-700 sm:text-center transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button'><Link to='/'> Digital Marketing</Link></span>
                            </p>
                          
                        </div>
                        <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
                            <img src="" className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Header