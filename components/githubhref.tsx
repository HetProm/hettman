
import Image from "next/image"
const Githubhref: React.FC = () => {



    return (
        <>
            <div className=" absolute w-[3em] h-auto top-[89%] left-[1em] flex flex-col justify-center items-center z-[1]">
                <a href="https://github.com/HetProm" className=" absolute">
                    <Image src={"/github-logo.png"} alt="" width={512} height={512}></Image>
                </a>
                <div className=" bg-slate-100 rounded-full w-[4em] h-[4em] shadow-lg"></div>
            </div>
        </>
    )
}

export default Githubhref