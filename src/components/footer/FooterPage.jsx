import React from "react";

const FooterPage = () => {
    return (
        <footer className="items-centers grid grid-cols-1 justify-between gap-4 border-opacity-10 text-center bg-neutral-800 p-3 text-zinc-300  py-4 ">
           
        <small className="">©2025 Carolina Pallaro</small>

        <p className="justify-center text-xs ">About this website: Built with React & Next.js (App Router & Server Actions), Typescript, TailwindCSS, Framer Motion, React Email & Resend. Deployed on Vercel.</p>
        
        </footer>
    )
}

export {FooterPage};