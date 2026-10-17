import './../styles/App.css';
function WeatherDisplay({ data }) {
  return (
    <div>
      {data.temperature > 20 ? (
        <>
          <span className="red">{data.temperature}</span>
          <p className="red">{data.conditions}</p>
        </>
      ) : (
        <>
          <span className="blue">{data.temperature}</span>
          <p className="blue">{data.conditions}</p>
        </>
      )}
    </div>
  );
}

export default WeatherDisplay;
