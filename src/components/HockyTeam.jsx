const teams = [
  {
    city: "Edinburgh",
    name: "Mark Atherton",
    logo: "https://avatars.githubusercontent.com/u/998738?v=4",
  },
  {
    name: "Kristen Ramos",
    city: "Glasgow",
    logo: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ted Fox",
    email: "Edinburgh",
    logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function HockeyTeamItem({ team }) {
  return (
    <li className="py-4 flex">
      <img className="h-10 w-10 rounded-full" src={team.logo} alt="" />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{team.name}</p>
        <p className="text-sm text-gray-500">{team.city}</p>
      </div>
    </li>
  );
}

export default function HockeyTeamList({ teams }) {
  return (
    <ul className="divide-y divide-gray-200">
      {teams.map((team) => (
        <HockeyTeamItem key={team.id} team={team} />
      ))}
    </ul>
  );
}
