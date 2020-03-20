/* eslint-disable no-unused-vars */
const longFunc = i => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i);
    }, Math.random() * 1000);
  });
};

const foo = async () => {
  for (let i = 0; i < 10; i++) {
    const r = await longFunc(i);
    console.log(r);
    // .then(r => {
    //   console.log(r);
    // })
    // .catch(e => {
    //   console.error(e.message);
    // });
  }
  return "done";
};

export default {
  foo
};
