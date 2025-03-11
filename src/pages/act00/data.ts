//qtype: "mc-quest" | "float-num-quest" | "one-line-text-quest" | "manylines-text-quest" | "graphing-quest";
export const quiz = {
  questions: [
    {
      qtype: "mc-quest",
      question: "What is the capital of France",
      options: ["A. London", "B. Paris", "C. Amsterdam", "D. Berlin"],
      Ref: "",
    },

    {
      qtype: "float-num-quest",
      question: "If x=5, what is the value of 2x+3?",
      options: [],
      Ref: "",
    },
    {
      qtype: "one-line-text-quest",
      question:
        "What happens to the price of a good when the demand for the good increases?",
      options: [],
      Ref: "",
    },
    {
      qtype: "graphing-quest",
      question:
        "Draw the supply and demand diagram. What happens to equilibrium price and quantity when the income of consumers goes up. Assume the good is a normal good. Show it by shifting the appropriate curve.",
      options: [],
      Ref: "",
    },
    {
      qtype: "manylines-text-quest",
      question: "What is the above graph about? Discuss in detail ",
      options: [],
      Ref: [
        "img",
        "hw2_img01.png",
        "Use the folowing to answer the questions below.",
        "Reference 1: Pollution Reduction",
      ],
    },
  ],
}
