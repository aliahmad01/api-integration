import React, { useState, useEffect, } from "react";


export default function ApiIntegration() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function api() {
            let response = await fetch("https://dragonball-api.com/api/characters/")
            let data = await response.json();
            setData(data.items)
        }
        api()
    }, [])
    console.log(data)


    return (
        <>
            <div className="bg-[rgb(39,43,51)] ">
                <section className="grid grid-cols-4 max-2xl:grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 p-4 pt-32 gap-8 mx-auto max-w-[1400px] place-content-center place-items-center">
                    {data.map((item) => (
                        <div key={item.id} className="w-[280px] flex flex-col bg-[#3c3e44] rounded-lg cursor-pointer shadow-md">
                            <div className="w-full relative bg-[url('https://web.dragonball-api.com/images-compress/89980.webp')] bg-center bg-cover bg-white min-h-[350px] max-h-[350px] rounded-t-lg">
                                <img
                                    className="absolute top-[-20px] w-full h-full min-h-[400px] max-h-[400px] m-0 object-center object-contain z-0 transition-transform duration-600 hover:scale-[1.2]"
                                    src={item.image} alt={item.name} />
                            </div>
                            <div className="p-3 text-white flex flex-col">
                                <div className="z-1">
                                    <h2 className="m-0 font-['Roboto','Helvetica','Arial',sans-serif] leading-[1.2] tracking-[-0.00833em] text-white text-2xl font-extrabold">{item.name}</h2>
                                    <p className="m-0 mb-4 text-[18px] leading-[1.8] font-['Roboto','Helvetica','Arial',sans-serif] tracking-[0.00938em] text-yellow-500 capitalize whitespace-nowrap overflow-hidden text-ellipsis font-bold">saiyan -male</p>
                                </div>
                                <div className="flex flex-col gap-7">
                                    <div>
                                        <p className="font-['Roboto','Helvetica','Arial',sans-serif] tracking-[0.00938em] leading-[0.5] font-semibold text-gray-100 text-base">Base KI:</p>
                                        <span className="m-0 text-[18px] font-['Roboto','Helvetica','Arial',sans-serif] tracking-[0.00938em] leading-[0.5] text-yellow-500 font-bold">{item.ki}</span>
                                    </div>
                                    <div>
                                        <p className="m-0 font-['Roboto','Helvetica','Arial',sans-serif] tracking-[0.00938em] leading-[0.5] font-semibold text-gray-100 text-base">Total KI:</p>
                                        <span className="m-0 text-[18px] font-['Roboto','Helvetica','Arial',sans-serif] tracking-[0.00938em] leading-[0.5] text-yellow-500 font-bold">{item.maxKi}</span>
                                    </div>
                                    <div>
                                        <p className="m-0 font-['Roboto','Helvetica','Arial',sans-serif] tracking-[0.00938em] leading-[0.5] font-semibold text-gray-100 text-base">Afilliation:</p>
                                        <span className="m-0 text-[18px] font-['Roboto','Helvetica','Arial',sans-serif] tracking-[0.00938em] leading-[0.5] text-yellow-500 font-bold">{item.affiliation}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </section>
            </div>
        </>
    );
}
