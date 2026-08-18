// შექმენი UserCard კომპონენტი, რომელსაც გადაეცემა name, age, job, city და isOnline. შექმენი ლამაზი მომხმარებლის ბარათი და ყველა ეს ინფორმაცია გამოიტანე. isOnline-ის მიხედვით აჩვენე მომხმარებელი Online არის თუ Offline.

function UserCard(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.job}</p>
            <p>{props.city}</p>
            <p>{props.isOnline}</p>
        </div>

    )
}

export default UserCard