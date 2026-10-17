import './../styles/App.css';
function WeatherDisplay({ data }) {
  return (
    <div>
      {data.temperature > 20 ? (
        <>
          <p className="red">{data.temperature}</p>
          <p className="red">{data.conditions}</p>
        </>
      ) : (
        <>
          <p className="blue">{data.temperature}</p>
          <p className="blue">{data.conditions}</p>
        </>
      )}
    </div>
  );
}

export default WeatherDisplay;
