export default function Contributors({ contributors }) {
  return (
    <div>
      <h3 className="text-xl font-semibold">Contributors</h3>
      <ul className="flex gap-2">
        {contributors.map((user, i) => (
          <li key={i}>
            <a href={`https://github.com/${user}`}>
              <img
                className="rounded-full w-12"
                src={`https://avatars.githubusercontent.com/${user}`}
                alt=""
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
