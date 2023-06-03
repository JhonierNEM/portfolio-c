export default function HTitle({ title, sub, className }) {
  return (
    <div className="flex flex-col items-center justify-center pt-6 pb-5 md:pt-[5.5rem]">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-textThree">{sub}</p>
    </div>
  )
}
