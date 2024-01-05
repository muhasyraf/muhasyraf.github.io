export const KebabCase = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[:]/g, "")
    .replace(/[,]/g, "")
    .replace(/[']/g, "")
    .replace(/[.]/g, "")
    .replace(/[&]/g, "and")
    .replace(/[-]+/g, "_")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

export const KebabArray = (arr: any[]) => arr.map((item) => KebabCase(item));

export const RandomNumberText = (finalNum: string, setNumber) => {
  let count = 0;
  let newNum = "";
  const interval = setInterval(() => {
    count++;
    for (let i = 0; i < finalNum.length; i++) {
      newNum += Math.floor(Math.random() * 10);
    }
    setNumber(newNum);
    newNum = "";
    if (count === 20) {
      clearInterval(interval);

      setNumber("404");
    }
  }, 80);
};
