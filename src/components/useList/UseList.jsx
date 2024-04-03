import "./UseList.css"

function UseList({users,deleteUser}) {
  return (
    <div className="userList">
        <div className="userList-container container">
            {users.map((user) => {
              return (
                <div className="card" key={user.id}>
                   <div className="card-inner">
                    <img src={user.image} alt="" />
                    <h3>{user.lastName} {user.fristName} {user.age} age</h3>
                    <p>From: {user.from}</p>
                    <p>hob: {user.job}</p>
                     <p>gender: {user.gender}</p>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>

                   </div>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default UseList