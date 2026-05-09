function Table({ data, onDelete }) {
  if (data.length === 0) {
    return <div className="empty-state">No records found.</div>;
  }

  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.id}>
              <td className="col-index">{index + 1}</td>
              <td className="col-name">
                <div className="name-cell">
                  <span className="avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  {user.name}
                </div>
              </td>
              <td className="col-email">{user.email}</td>
              <td className="col-phone">{user.phone.split(" ")[0]}</td>
              <td className="col-city">
                <span className="city-badge">{user.address.city}</span>
              </td>
              <td className="col-actions">
                <button className="btn-edit">Edit</button>
                <button
                  className="btn-delete"
                  onClick={() => onDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
