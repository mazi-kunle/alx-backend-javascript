import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = createUser();
  const promise2 = uploadPhoto();

  const promises = Promise.all([promise1, promise2]);
  promises
    .then((res) => {
      console.log(`${res[1].body} ${res[0].firstName} ${res[0].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
