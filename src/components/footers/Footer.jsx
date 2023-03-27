//componets
import BIcon from "../form/buttons/BIcon"

export default function Footer(){
    return (
        <footer className="bg-main text-textOne border-t-2 border-black py-4 px-8 flex justify-between">
            <section>
            <span>by Yhonier Alegria</span>
            </section>
            <section></section>
            <section className="flex gap-2">
             <BIcon icon="GitHub" className=""/>
             <BIcon icon="LinkedIn" className=""/>  
            </section>
        </footer>
    )
}