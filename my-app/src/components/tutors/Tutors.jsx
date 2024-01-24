import { Component } from "react";
import styles from "./Tutors.module.css";
import Button from "../common/button/Button";
import AddTutor from "./addTutor/AddTutor";
import Icon from "../common/icon/Icon";

class Tutors extends Component {
  state = {
    isAddFormVisible: false,
    list: [
      {
        id: 0,
        firstName: "Dan",
        lastName: "Retegan",
        telephone: "0753023616",
        email: "danretegan@yahoo.com",
        city: "London",
        role: "Administrator",
      },
    ],
  };

  renderList = (items) => {
    return items.map((el) => {
      const name = `${el.firstName} ${el.lastName}`;

      return (
        <div key={el.id} className={styles.tutorsListItem}>
          <div>{name}</div>
          <div className={styles.address}>
            <span>{el.email}</span>
            <span>{el.telephone}</span>
            <span>{el.city}</span>
          </div>
          <div>{el.role}</div>
        </div>
      );
    });
  };

  componentDidMount() {
    console.info("Am montat componenta Tutors...");
  }

  componentDidUpdate() {
    console.info("Am actualizat componenta Tutors.");
  }

  componentWillUnmount() {
    console.info("Am demontat componenta Tutors!");
  }

  shouldComponentUpdate() {
    console.info("ar trebui să se actualizeze componenta Tutors?");
    return true;
  }

  render() {
    const { isAddFormVisible, list } = this.state;
    return (
      <section className="section">
        <h1>
          <Icon variant="cat" label="cat" />
          <span>Tutors</span>
        </h1>
        <div className={`box ${styles.tutorsList}`}>
          {this.renderList(list)}
        </div>
        {isAddFormVisible && <AddTutor onFormSubmit={this.handleTutor} />}
        <Button
          action={() => {
            this.setState({
              isAddFormVisible: true,
            });
          }}
        >
          Add Tutor
        </Button>
      </section>
    );
  }

  handleTutor = (date) => {
    const newId = this.state.list.length > 0 ? this.state.list.length : 0;

    const tutorToAdd = {
      id: newId,
      firstName: date.name,
      lastName: date.surname,
      telephone: date.phone,
      email: date.email,
      city: date.city,
      role: "member",
    };

    /**
     * Pentru orice state care este un obiect sau array si avem nevoie de starea precedenta, folosim metoda de mai jos:
     */
    this.setState((prevState) => {
      return {
        list: [...prevState.list, tutorToAdd],
        isAddFormVisible: false,
      };
    });
  };
}

export default Tutors;
