import React from "react";
import MicroPreview from "../components/MicroPreview";
import {
  query,
  orderBy,
  limit,
  collection,
  getDocs,
  where,
} from "firebase/firestore";
import { firestore } from "../Firebase";
import { Link } from "react-router-dom";
import "./Main.css"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      microPreviewList: [],
      search: "",
      error: "",
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.querySearch = this.querySearch.bind(this);
  }

  setMicroPreview(querySnap) {
    querySnap.forEach((doc) => {
      this.setState({
        microPreviewList: [
          ...this.state.microPreviewList,
          <li key={doc.id} style={{ listStyleType: "none" }}>
            <Link
              className="link-to-preview"
              to={"/preview/" + doc.id}
              style={{ textDecoration: "none" }}
            >
              <MicroPreview
                bladeColor={doc.data().bladeColor}
                hiltColor={doc.data().hiltColor}
                robeColor={doc.data().robeColor}
                eyeColor={doc.data().eyeColor}
                skinColor={doc.data().skinColor}
                isSith={doc.data().isSith}
                backgroundColor={doc.data().backgroundColor}
                uuid={doc.id}
                charTitle={doc.data().charTitle}
                isRightHanded={doc.data().isRightHanded}
              />
            </Link>
          </li>,
        ],
      });
    });
  }

  async querySearch(event) {
    event.preventDefault();
    if (this.state.search === "") {
      this.queryByDate();
      return;
    }
    const creations = collection(firestore, "creations");
    const q = query(
      creations,
      where("charTitle", "==", this.state.search),
      limit(10)
    );
    const querySnap = await getDocs(q);

    if (querySnap.size === 0) {
      // alert("Could not find anything.")

      this.setState({
        search: "",
        error: "Could not find anything. Search is case sensative. Try again",
      });
    } else {
      this.setState({
        microPreviewList: [],
        error: "",
      });
      this.setMicroPreview(querySnap);
    }
  }

  async queryByDate() {
    this.setState({
      microPreviewList: [],
      error: "",
    });
    const creations = collection(firestore, "creations");
    const q = query(creations, orderBy("dateCreated", "desc"), limit(10));
    const querySnap = await getDocs(q);

    this.setMicroPreview(querySnap);
  }

  async componentDidMount() {
    this.queryByDate();
  }

  handleSearchChange(e) {
    this.setState({
      search: e.target.value,
    });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <h2 style={{textAlign: "center" , color: "white" }}>Community Creations</h2>
        {this.state.error && (
          <alert
            className="sign-error"
            variant="danger"
            style={{ textAlign: "center" }}
          >
            {this.state.error}
          </alert>
        )}
        <div className="search-wrapper" style={{}}>
          <form onSubmit={this.querySearch}>
            <input
              className="char-title"
              type="text"
              onChange={this.handleSearchChange}
              value={this.state.search}
              placeholder={"Search"}
              style={{ padding: "5px", marginBottom: "20px" }}
            />
          </form>
        </div>

        <div className="list-container" style={{ width: "90%" }}>
          <ul
          id="list-char"
          
           
          >
            {this.state.microPreviewList}
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
