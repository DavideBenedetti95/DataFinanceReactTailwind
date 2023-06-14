import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"


const Cards = () => {
    return(
        <div className="w-full py-[10rem] px-4 bg-white text-black" id="price">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full flex flex-col border shadow-xl hover:scale-105 duration-200">
                    <img src={Single} alt="Icon Single Person" className="w-20 mx-auto mt-[-3rem] bg-white"/>
                    <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                    <p className="text-center text-4xl font-bold">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="mb-3 mx-auto bg-accent w-40 h-10 rounded mt-3 text-black font-semibold">Start Trial</button>                    
                </div>
                
                <div className="w-full flex flex-col border shadow-xl hover:scale-105 duration-200 my-16 md:my-0 bg-gray-100">
                    <img src={Double} alt="Icon Double Person" className="w-20 mx-auto mt-[-3rem] bg-white"/>
                    <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
                    <p className="text-center text-4xl font-bold">$199</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">1TB Storage</p>
                        <p className="py-2 border-b mx-8">2 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 10 GB</p>
                    </div>
                    <button className="mb-3 mx-auto bg-black w-40 h-10 rounded mt-3 text-accent font-semibold">Start Trial</button>                    
                </div>

                <div className="w-full flex flex-col border shadow-xl hover:scale-105 duration-200">
                    <img src={Triple} alt="Icon Triple Person" className="w-20 mx-auto mt-[-3rem] bg-white"/>
                    <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
                    <p className="text-center text-4xl font-bold">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">5TB Storage</p>
                        <p className="py-2 border-b mx-8">3 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 20 GB</p>
                    </div>
                    <button className="mb-3 mx-auto bg-accent w-40 h-10 rounded mt-3 text-black font-semibold">Start Trial</button>                    
                </div>
            </div>
        </div>
    )
};

export default Cards;
