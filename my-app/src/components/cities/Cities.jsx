import { Component } from "react";
import AddCitiesForm from "./AddCitiesForm";
import Icon from "../common/icon/Icon";
import Button from "../common/button/Button";

class Cities extends Component {
  state = {
    isAddCityFormVisible: false,
  };

  render() {
    const { isAddCityFormVisible } = this.state;

    return (
      <div>
        <h2>
          <Icon variant="pin" label="cities" />
          <span>Cities</span>
        </h2>
        {isAddCityFormVisible && <AddCitiesForm />}
        <Button
          action={() => {
            this.setState({
              isAddCityFormVisible: true,
            });
          }}
        >
          Add City
        </Button>
      </div>
    );
  }
}

export default Cities;
