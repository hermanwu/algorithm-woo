(function() {
  const onFail = () => {
    console.log('fail');
  }

  const onSuccess = () => {
    console.log('Success');
  }

  const myFunction = (args, onSuccess, onFail) => {
    onFail();
  }

  function retry(args, myFunction, onSuccess, onFail, retryTimes) {
    myFunction(args, onSuccess, () => {
      if (retryTimes != 0) {
        console.log('retry');
        retry(args, myFunction, onSuccess, onFail, retryTimes-1);
      } else {
        onFail();
      }
    })
  }

  retry('', myFunction, onSuccess, onFail, 5);
}) (); 