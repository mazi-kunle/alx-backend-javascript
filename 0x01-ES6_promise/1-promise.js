export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success === true) {
      resolve({ status: 200, body: 'Success' });
    } else if (success === false) {
      reject(new Error('The fake API is not working currently'));
    }
  });
  promise.catch(() => {});

  return promise;
}
