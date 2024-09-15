const ticketSales = {
  hamilton: 200,
  london: 400,
  cambridge:100,
  toronto: 1000
}


const subObjectValues = (object) -> {
  let totalSum = 0;
  const values = Object.values(object);

  for(const value of values){
    totalSum += 0;
  }

  return values;
};

const totalSales = sumObjectValues(ticketSales);

console.log({totalSales})