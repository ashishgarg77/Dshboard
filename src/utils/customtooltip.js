export const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div>
            {payload.map((pld) => (
              <div style={{ display: "inline-block", padding: 10 , backgroundColor: "#182D64", color: "white"}}>
                <div style={{fontweight:"700", fontSize:"16px", color:"white" }}>{pld.value}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  
    return null;
  };