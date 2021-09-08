import Team from "./Team";
import Team2 from "./Team2";


const data = [
  {
    name: "dilip",
  },
  {
    name: "pranav",
  },
  {
    name: "ashu",
  },
  {
    name: "salman",
  }
]


function About(props) {
  return (
    <div className="App">
      About Page

      <ul>
        {
          data.map((item)=>{
            return(
              <Team item={item.name}/>
            )
          })
        }
      </ul>

      <ul>
        <Team2 items={data} />
      </ul>

      <ul>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
      </ul>

      <ul>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
      </ul>


      <ul>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
      </ul>


      <ul>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
        <li>Team members</li>
      </ul>
    </div>
  );
}

export default About;
