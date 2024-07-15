import React from "react"

const _Skills = () =>{
    return(

        <>
        <div className="bloque flex flex-col text items-center justify-center text-primaryFont ">

            


            <h2 className="font-lexend text-lg ">SKILLS</h2>


            <p className="desktop:px-10 desktop:py-10 ">Aca iria algo de contexto de las habilidades actuales, las que aprendo (actualmte)
                y alguna otra de interes relacionado al sector
            </p>

           </div>

           <div className="flex flex-row items-center justify-around p-20 text-primaryFont movil:p-1  movil:py-4 desktop:p-5 ">

             <ul>

             <h4 className=" font-lexend text-details">Front End</h4>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>React</li>
                <li>Tailwind CSS</li>
                
             </ul>

             <ul>

             <h4 className=" font-lexend text-details">Back End</h4>
                <li>Java</li>
                <li>SpringBoot</li>
                <li>SQL MySql</li>
                <li>Postman</li>
                <li>RESTful API</li>
            </ul>

           </div>

            </>
          

    )
}

export {_Skills}