import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "유아로",
    birthday: "220428",
    gender: "수컷",
    job: "고양이",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "모몰로",
    birthday: "230128",
    gender: "수컷",
    job: "고양이",
  },
  {
    id: 1,
    image: "https://placeimg.com/64/64/3",
    name: "모쨰순",
    birthday: "950211",
    gender: "남자",
    job: "사람",
  },
];

function App() {
  return (
    <div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          ></Customer>
        );
      })}
    </div>
  );
}

export default App;
