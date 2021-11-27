import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import MicroPreview from "../components/MicroPreview";
import { query, limit, collection, getDocs, where } from "firebase/firestore";
import { firestore } from "../Firebase";
import { Link } from "react-router-dom";

export default function MyCreations() {
  const [microPreviewList, setMicroPreviewList] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const { currentUser } = useAuth();

  function setMicroPreview(querySnap) {
    querySnap.forEach((doc) => {
      setMicroPreviewList((microPreviewList) => [
        ...microPreviewList,
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
      ]);
    });
  }

  async function querySearch(event) {
    event.preventDefault();
    if (search === "") {
      queryByUser();
      return;
    }
    const creations = collection(firestore, "creations");
    const q = query(creations, where("charTitle", "==", search), limit(10));
    const querySnap = await getDocs(q);

    if (querySnap.size === 0) {
      // alert("Could not find anything.")

      setSearch("");
      setError("Could not find anything. Search is case sensative. Try again");
    } else {
      setMicroPreviewList([]);
      setError("");
      setMicroPreview(querySnap);
    }
  }

  async function queryByUser() {
    setMicroPreviewList([]);
    setError("");
    const creations = collection(firestore, "creations");
    const q = query(
      creations,
      where("ownerID", "==", currentUser.uid),
      limit(10)
    );
    const querySnap = await getDocs(q);

    setMicroPreview(querySnap);
  }

  useEffect(() => {
    queryByUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

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
      <h2 style={{ color: "white" }}>My Creations</h2>
      {error && (
        <alert
          className="sign-error"
          variant="danger"
          style={{ textAlign: "center" }}
        >
          {error}
        </alert>
      )}
      <div className="search-wrapper" style={{}}>
        <form onSubmit={querySearch}>
          <input
            className="char-title"
            type="text"
            onChange={handleSearchChange}
            value={search}
            placeholder={"Search"}
            style={{ padding: "5px", marginBottom: "20px" }}
          />
        </form>
      </div>

      <div className="list-container" style={{ width: "90%" }}>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",

            gap: "10px",
            margin: "0",
            padding: "0",
          }}
        >
          {microPreviewList}
        </ul>
      </div>
    </div>
  );
}
