import { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Tutors from "./components/tutors/Tutors";
import University from "./components/university/University";

class App extends Component {
  tutors = [
    {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      telephone: "07123456",
      email: "johnsmith@company.com",
      location: "Paris",
      role: "Administrator",
    },
  ];

  render() {
    return (
      <main className="App">
        <Sidebar />
        <section className="container">
          <University />
          <Tutors list={this.tutors} />
        </section>
      </main>
    );
  }
}

export default App;
