import { IoInformationCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./ListItem.css";

function ListItem({ src, title, subtitle, id }) {
  return (
    <div className="listItem-wrapper listItem">
      <Link className="img-link" to={`/details/${id}`}>
        <img alt="img" src={src} className="listItem__img" />
      </Link>
      <div className="listItem-info info">
        <Link className="info-link" to={`/details/${id}`}>
          <h2 className="info__title">{title}</h2>
          <h4 className="info__subtitle">{subtitle}</h4>
        </Link>
      </div>
      <div className="listItem-options options">
        <Link className="options-link" to={`/details/${id}`}>
          <IoInformationCircleOutline className="options-link__info" />
        </Link>
      </div>
    </div>
  );
}

export default ListItem;
