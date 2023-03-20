import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import MiniCard from "../miniCard";

import "./index.css";

const MiniCardList = ({ endpoint }) => {
    const [miniCardList, setMiniCardList] = useState([]);
    
    useEffect(() => {
        GET(endpoint).then((data) => setMiniCardList(() => data.products));
      }, []);

      return (
        <div className="MiniCardList">
          { miniCardList.map((card) => (
            <MiniCard imgSrc={card.thumbnail} imgAlt={card.title} key={card.id} />
          ))}
        </div>
      )
}

export default MiniCardList;