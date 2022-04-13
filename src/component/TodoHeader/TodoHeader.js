import "./header.css";
import afternoon from "../img/header-afternoon.jpg";
import day from "../img/header-day.jpg";
import night from "../img/header-night.jpg";
import HeaderTimer from "../HeaderTimer/HeaderTimer";

const TodoHeader = (hour) => {
  const date = new Date();

  const getBckground = (hour) => {
    if (hour >= 6 && hour < 16) {
      // Day time - 06:00 to 16:00
      return { backgroundImage: `url(${day})` };
    } else if (hour >= 16 && hour < 20) {
      // Afternoon - 16:00 to 20:00
      return { backgroundImage: `url(${afternoon})` };
    } else if (hour >= 20 || hour <= 5) {
      // Night time - 20:00 to 05:00
      return { backgroundImage: `url(${night})` };
    }
  };
  return (
    <section style={getBckground(date.getHours())} className="sectionStyle">
      <HeaderTimer />
    </section>
  );
};

export default TodoHeader;
