const QuestionCard = ({ data }) => {
  const optionslist = [data.answer, ...data.options];
  const renderedItems = optionslist.map((number, index) => {
    return (
      <button style={{ height: "90%", width: "20%" }} key={index}>
        {number}
      </button>
    );
  });
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "70%",
        width: "90%",
        border: "solid 6px black",
        borderRadius: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", paddingTop: "10px" }}>
        {data.question}
      </h1>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "80%",
          justifyContent: "center",
          gap: "30px",
          alignItems: "center",
        }}
      >
        {renderedItems}
      </div>
    </div>
  );
};

export default QuestionCard;
