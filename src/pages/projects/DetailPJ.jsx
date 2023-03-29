import { useParams } from "react-router-dom"

export default function DetailPJ(){

    const {id} = useParams()

    return <div className="min-h-screen bg-main text-tx-main pt-6 md:pt-[5.5rem]">
        {id}
    </div>
}