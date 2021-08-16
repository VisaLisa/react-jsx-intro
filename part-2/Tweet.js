//TODO: Define a Tweet component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted

function Tweet(props) {
  return (
    <div className="tweet">
      <p>{props.name}</p>
      <p>{props.username}</p>
      <p>{props.date}</p>
      <p>{props.message}</p>
    </div>
  );
}
