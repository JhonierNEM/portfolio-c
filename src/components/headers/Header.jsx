export default function Header({ Nav }) {
  return (
    <>
      <Nav />

      <div className="border p-2 h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-gray-100 text-center py-4 text-5xl font-extrabold">
          Full Stack Developer
        </h1>
        <h2 className="hidden md:block text-4xl font-extrabold">
          Yhonier C Alegria
        </h2>
      </div>
    </>
  )
}
