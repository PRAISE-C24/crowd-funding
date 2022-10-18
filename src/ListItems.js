function ListItem({ figure, value }) {
  return (
    <li className="flex flex-col justify-center items-start gap-2">
      <span className="text-3xl font-bold md:text-4xl">{figure}</span>
      <span>{value}</span>
    </li>
  );
}

export default ListItem;
