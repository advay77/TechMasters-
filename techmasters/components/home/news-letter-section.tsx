import { Ripple } from "../magicui/ripple"

export const NewsLetterSection = ()=>{
    return <div className="h-screen flex flex-col justify-center items-center">
        <Ripple className="overflow-hidden">

        </Ripple>
        <div className="py-30 px-30 rounded-[10px] border border-2  bg-white z-10 text-center ">
           <h3 className="text-4xl font-medium  text-blue-500">Stay Updated</h3>
           <p className="mt-4 text-md text-gray-400 max-w-lg">Stay connected to stay updated about the upcoming events and the latest news</p>
           <button className="mt-4 rounded-full px-8 py-1 bg-gray-200 text-sm font-md ">Join us</button>

        </div>
    </div>
}


