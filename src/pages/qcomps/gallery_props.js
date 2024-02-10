function Profile({ person }) {
  return (
    <section>
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={person.imageSrc}
        alt={person.name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awardCount} </b>
          ({person.awardList})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={{ 
          name: 'Maria Skłodowska-Curie', 
          imageSrc: 'https://i.imgur.com/szV5sdGs.jpg', 
          profession: 'physicist and chemist',
          awardCount: 4,
          awardList: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
          discovery: 'polonium (element)'
        }}
      />
      <Profile
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageSrc: 'https://i.imgur.com/YfeOqp2s.jpg', 
          profession: 'geochemist',
          awardCount: 2,
          awardList: 'Miyake Prize for geochemistry, Tanaka Prize',
          discovery: 'a method for measuring carbon dioxide in seawater'
        }}
        size={200} />
    </div>
  );
}
