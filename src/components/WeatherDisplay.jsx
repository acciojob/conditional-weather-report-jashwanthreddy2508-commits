import './../styles/App.css';
function WeatherDisplay({ data }) {
  return (
    <div>
      <p>
        Temperature: 
        <span style={{ color: data.temperature > 20 ? "red" : "blue" }}> {data.temperature}°C </span>
      </p>

      <p>{data.conditions}</p>
    </div>
  );
}

export default WeatherDisplay;

