const TimeAgo = ({ timestamp }) => {
  const now = Date.now();
  const diffMs = now - timestamp;
  const diffMin = Math.floor(diffMs / 60000);

  let result = "меньше минуты назад";
  if (diffMin >= 1 && diffMin < 60) result = `${diffMin} мин назад`;
  else if (diffMin < 1440) result = `${Math.floor(diffMin / 60)} ч назад`;
  else result = `${Math.floor(diffMin / 1440)} дн назад`;

  return <span className="time-ago">{result}</span>;
};

export default TimeAgo;
