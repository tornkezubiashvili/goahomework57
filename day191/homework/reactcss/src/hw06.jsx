function Hw06() {
  const users = [
    {
      id: 1,
      name: "Giorgi",
      age: 22,
      skills: ["JavaScript", "React", "CSS"]
    },
    {
      id: 2,
      name: "Nika",
      age: 25,
      skills: ["Python", "Django"]
    }
  ];

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>

          <h3>Skills:</h3>

          <ul>
            {user.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Hw06