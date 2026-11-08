function CrowdList({ crowdData }) {
  return (
    <div className="crowd-list">
      <h2>Crowd Locations</h2>

      {crowdData.map((crowd) => (
        <div className="crowd-item" key={crowd.id}>
          <div>
            <h3>{crowd.location}</h3>
            <p>People: {crowd.peopleCount}</p>
          </div>

          <strong className={crowd.density.toLowerCase()}>
            {crowd.density}
          </strong>
        </div>
      ))}
    </div>
  );
}

export default CrowdList;