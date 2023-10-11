import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <main>

            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12  ">
                    <div>
                        <div>
                            <h1 className="text-4xl font-semibold tracking-tight pb-16  sm:text-7xl">
                                Training Team
                                
                            </h1>
                            <p className="mt-16 text-2xl max-w-3xl leading-8 text-black ">
                            Ut morbi tincidunt augue interdum velit euismod in pellentesque. Sit amet venenatis urna cursus. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Semper auctor neque vitae tempus quam. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus.
                            </p>
                          
                        </div>
                        <div className="absolute inset-y-0 blur right-0 3xl:right-40 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white  lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
                            <img src="https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18383.jpg" className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Header