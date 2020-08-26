console.clear();

interface Observer<T> {
  next(value: T): void;
  error?(err: any): void;
  complete?(): void;
}

function myObserver(observer: Observer<number>){

  let i = 0;

  const id = setInterval(() => {
    if(i> 3) {
      observer.complete();
    }
    observer.next(i++);
    }, 1000);

  return () => {
    clearInterval(id)
  }
}

let intrvl = myObserver({
  next(value: number) {
    console.log(value);
  },
  complete() {
    console.log('done');
  }
})

setTimeout(() => intrvl(), 5000);
