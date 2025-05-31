// Simulate Promise results (e.g., useful for testing)

const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

const pe = Promise.reject(new Error("reason for rejection..."));
pe.catch((error) => console.log(error));
