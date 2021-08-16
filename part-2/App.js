function App() {
  return (
    <div>
      <Tweet
        name="Bobby LEE"
        username="blahblah1"
        date={new Date().toDateString()}
        message="HI !"
      />
      <Tweet
        name="Tim Mo Tee"
        username="TMT"
        date={new Date().toDateString()}
        message="Como esta"
      />
      <Tweet
        name="May Bee"
        username="Maybe"
        date={new Date().toDateString()}
        message="Arrested Development"
      />
    </div>
  );
}
