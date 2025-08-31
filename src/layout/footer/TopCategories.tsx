import { Link } from "react-router-dom";
import ListHeader from "./ListHeader";

interface CategoriesProps {
  title: string;
  path: string;
}

const categories: Array<CategoriesProps> = [
  { title: "Mobile Phones", path: "#" },
  { title: "Modern Sofa", path: "#" },
  { title: "Arm Chair", path: "#" },
  { title: "Smart Watches", path: "#" },
];

export default function TopCategories() {
  return (
    <div className="flex flex-col items-center gap-1 sm:items-start sm:gap-3">
      <ListHeader title="Top Categories" />

      <div className="flex flex-col gap-2">
        {categories.map(({ title, path }: CategoriesProps) => (
          <Link
            key={title}
            className="p-0 transition-all duration-300 hover:pl-1 hover:font-bold"
            to={path}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}
