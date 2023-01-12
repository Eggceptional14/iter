import Card from "react-bootstrap/Card";

function BasicCard({ item }) {
  return (
    <Card
      style={{
        width: 300,
        height: 250,
        border: "1px solid rgb(255, 255, 255)",
        borderRadius: '30px',
        backgroundColor: "#0d1117",
        color: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <Card.Img style={{height: '300px', width: '300px'}} variant="top" src={item?.src} />
    </Card>
  );
}

export default BasicCard;