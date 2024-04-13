import { MdSearch } from "react-icons/md";

import styles from "./index.module.css";

export default function Sidebar() {
  return (
    <aside>
      <div className={styles.searchBox}>
        <button>
          <MdSearch size={24} color="grey" />
        </button>
        <input type="search" />
      </div>
      <hr className={styles.hrLine} />
    </aside>
  );
}
