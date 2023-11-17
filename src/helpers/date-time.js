import moment from "moment/moment";


export const formatTime = (time) => {
  return moment(time, "HH:mm:ss").format("HH:mm");
};
