export default function People(props) {
  return (
    <ul className="divide-y divide-gray-200">
      <li key={props.name} className="py-4 flex">
        <img className="h-10 w-10 rounded-full" src={props.image} alt="" />
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{props.name}</p>
          <p className="text-sm text-gray-500">{props.email}</p>
        </div>
      </li>
    </ul>
  );
}
