import react from "react";
import { directive } from "@babel/types";


class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: "1",
          title: "Buy Milk.",
          done: false,
          date: new Date()
        },
        {
          id: "2",
          title: "Meeting with Ali.",
          done: false,
          date: new Date()
        },
        {
          id: "3",
          title: "Tea break.",
          done: false,
          date: new Date()
        },
        {
          id: "4",
          title: "Go for a run.",
          done: false,
          date: new Date()
        }
      ]
    };
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}