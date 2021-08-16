function App() {
  return (
    <div>
      <Person
        name="Bobby"
        age={24}
        hobbies={["cooking", "drinking", "painting"]}
      />
      <Person
        name="Bob"
        age={18}
        hobbies={["cooking", "drinking", "painting"]}
      />
      <Person
        name="Amy"
        age={10}
        hobbies={["skateboarding", "making prank calls"]}
      />
      <Person
        name="Amber"
        age={8}
        hobbies={["reading", "saxophone", "eating vegetables"]}
      />
    </div>
  );
}
