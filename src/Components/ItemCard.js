export default function ItemCard(props) {
    return (
      <div className="Item-card">
        <p>
          <b>Title</b>: {props.title}
        </p>
        <p>
          <b>Value</b>: {props.value}
        </p>
        <p>
          <b>Date</b>: {props.date}
        </p>
        <p>
          <b>categry</b>: {props.category}
        </p>
      </div>
    );
  }