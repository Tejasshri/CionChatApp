import { MdSearch } from "react-icons/md";
import { v4 } from "uuid";
import styles from "./index.module.css";
import { useContext, useEffect, useState } from "react";
import ReactContext from "../../context/ReactContext";

export default function Sidebar() {
  const { users, setUsers } = useContext(ReactContext);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const response = await fetch("http://192.168.1.37:6001/users");
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        }
      } catch (error) {
        console.log(error.message, "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    })();
  },[]);

  return (
    <aside>
      <div  className={styles.sidebarHeader}>
        <div className={styles.searchBox}>
          <button>
            <MdSearch size={24} color="grey" />
          </button>
          <input type="search" />
        </div>
        <button className={styles.addNewBtn}>
          New
        </button>
      </div>
      <hr className={styles.hrLine} />
      <ul className={styles.userList}>
        {isLoading ? (
          <LoadingView />
        ) : (
          users.map((each) => (
            <li key={v4()}>
              <img src={each.imageUrl} alt="" />
              <div>
                <h1>{each.name}</h1>
                <p>{each.phonenumber}</p>
              </div>
            </li>
          ))
        )}
        <li></li>
      </ul>
    </aside>
  );
}

function LoadingView() {
  let n = [1,2,3,4,5,6,7,8,9,10,11,12];
  return (
    <>
      {n.map((each) => (
        <li key={v4()} className={styles.userPlaceholder}>
          <div className={styles.placeholderImg}></div>
          <div className={styles.placeholderText}>
            <div className={styles.placeholderH1}></div>
            <div className={styles.placeholderP}></div>
          </div>
        </li>
      ))}
    </>
  );
}
