import { MdSearch } from "react-icons/md";

import styles from "./index.module.css";
import { useContext } from "react";
import ReactContext from "../../context/ReactContext";

export default function Sidebar() {
  const {users} = useContext(ReactContext)
  
  return (
    <aside>
      <div className={styles.searchBox}>
        <button>
          <MdSearch size={24} color="grey" />
        </button>
        <input type="search" />
      </div>
      <hr className={styles.hrLine} />
      <ul className={styles.userList}>
        {
          users.map(each => (
            <li>
              {each.name}
            </li>
          ))
        }
        <li>

        </li>
      </ul>
    </aside>
  );
}
