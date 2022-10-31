import {getWorkshops} from "../api"

export default function Workshops() {
  const workshops = getWorkshops()

  return (
      <div className="container">
          <h1>Workshop Categories</h1>
          {workshops.map(workshop =>
            <ul key={workshop.id}>
              <li>{workshop.name}</li>
            </ul>
            )}
      </div>
  );
}
