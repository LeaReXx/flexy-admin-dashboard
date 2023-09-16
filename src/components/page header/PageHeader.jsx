import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const PageHeader = ({ route }) => {
  return (
    <article>
      <div>
        <h1 className="text-2xl font-medium">Analytical</h1>
      </div>
      <div className="py-2">
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          className="bg-opacity-0 p-0"
        >
          {route.map((item) => 
            route.length === item.id ? (
              <span className="text-lg text-[#888888]" key={item.id}>{item.title}</span>
            ) : (
              <Link to={item.src} className="text-lg text-[#525252]" key={item.id}>
                {item.title}
              </Link>
            )
          )}
        </Breadcrumbs>
      </div>
    </article>
  );
};

export default PageHeader;
