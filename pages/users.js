function Users({ users }) {
  return (
    <div className="container">
      <h1>List of Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td>
                  <p>{user.name}</p>
                </td>
                <td>
                  <p>{user.email}</p>
                </td>
                <td>
                  <p>{user.website}</p>
                </td>
                <td>
                  <p>{user.company.name}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Users;
export async function getServerSideProps() {
  const URL = "https://jsonplaceholder.typicode.com";
  const response = await fetch(`${URL}/users`)
    .then(res => res.json())
    .catch(err => console.log(err));
  return { props: { users: response || [] } };
}
