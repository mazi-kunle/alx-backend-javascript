import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];
  const promise = Promise.allSettled(promises);
  promise.then((res) => {
    const newArr = res.map((o) => ({
      status: o.status,
      value: o.status === 'fulfilled' ? o.value : String(o.reason),
    }));
    //console.log(newArr);
  });

 return promise;
}
