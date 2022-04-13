import { useEffect, useState } from "react";

const HeaderTimer = () => {
  ///// Date
  let [second, setScound] = useState(0);
  let [min, setMin] = useState(0);
  let [hour, setHour] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setScound((second += 1));
      if (second >= 60) {
        setScound((second = 0));
        setMin((min += 1));
      }
      if (min >= 60) {
        setMin((min = 0));
        setHour((hour += 1));
      }
    }, 100);
  }, []);

  ////Timer
  const now = new Date();
  const option = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const local = navigator.language;
  const date = new Intl.DateTimeFormat(local, option).format(now);

  return (
    <div className="date">
      <div>{date}</div>
      <div className="timer">{`${second.toString().padStart(2, "0")}: ${hour
        .toString()
        .padStart(2, "0")}:${min.toString().padStart(2, "0")}`}</div>
    </div>
  );
};

export default HeaderTimer;
