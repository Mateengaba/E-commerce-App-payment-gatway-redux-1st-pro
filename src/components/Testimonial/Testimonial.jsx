import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="data:image/jpeg;base64,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" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal Nayan Upadhyay</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="data:image/jpeg;base64,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" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="data:image/jpeg;base64,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" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial