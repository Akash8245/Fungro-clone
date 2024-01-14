import React from "react";

export default function Hero() {
  return (
    <div className="font-[Poppins] min-h-[100vh] bg-[#121E2C] text-white p-8 ">


    <section className="md:flex md:items-center" >
    <div className="lg:w-[40%]  ">
        <p className=" text-[50px] font-bold">Earn your</p>
        <p className="text-[50px] font-bold">first income</p>
        <p className="py-4 text-[#DFDFD9]">
          Real companies, real projects, real earnings and real money ‍
        </p>
        <p className="py-4 text-[#DFDFD9]">
          Smart opportunities for the smart generation
        </p>
       {/* Main body  */}
       <main className="">
        {/* section  */}
       <section className="md:flex md:space-x-4 md:items-center" >
       <p className="font-bold pt-5 md:pt-0 ">Download App</p>
        <div className="flex space-x-3 py-5 " >
          <img
            src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png"
            alt=""
            className="w-[150px]"
          />
          <img
            src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png"
            alt=""
            className="w-[150px]"
          />
        </div>
       </section>
          <button className="text-[19px] font-bold bg-[#3EAF68] p-2 my-8 w-[200px] rounded-[20px]  hover:bg-[#4fdf83] " >LogIn →</button>

       {/* Main Image  */}
       <div>
       </div>
       </main>
 
      </div>
      
      <div>
       <img src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png" alt="" 
       className="md:ml-8 lg:ml-40 "/>
      </div>
    </section>

    
    </div>
    
  );
}
