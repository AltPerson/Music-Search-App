import ListItem from "./ListItem";
import "./InfoList.css";

function InfoList({ data }) {
  return (
    <section className="infoList">
      {data.map((item) => (
        <ListItem
          key={item.id}
          subtitle={item.title}
          title={item.artist.name}
          src={item.album.cover_medium}
          id={item.album.id}
        />
      ))}
    </section>
  );
}

export default InfoList;
